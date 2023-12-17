import L, { Icon } from 'leaflet'
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { decode, encode } from "@googlemaps/polyline-codec";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchGooglePolydata,
  fetchTollGuruTollData,
  tollGuruTollData,
} from "../slices/MapSlice";

const LeafletMap = () => {
    let dispatch=useDispatch()
    
    let {
      googlePolylineData,
      GOOGLE_DATA_LOADING,
      GOOGLE_DATA_SUCCESS,
      TOLLGURU_DATA_LOADING,
      TOLLGURU_DATA_SUCCESS,
      tollGuruTollData,
    } = useSelector((state) => state.Map);


    let [inputs,setInputs]=useState({
        source:'',
        destination:''
    })
    let [decoded,setDecoded]=useState([])
    let [markers,setMarkers]=useState([])
    let gates=[]
    let icon = new Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    });

    let sourceIcon = new Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1483/1483336.png",
    });
    let destinationIcon = new Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    });
    
    let handelChange=(e)=>
    {
        setInputs((prev)=>
        {
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    let handleClick=(source,destination)=>
    {
        dispatch(fetchGooglePolydata({source:inputs.source,destination:inputs.destination}))
        setInputs({
          source: "",
          destination: "",
        });
    }

    useEffect(() => {
      setDecoded(decode(googlePolylineData,5));
    }, [googlePolylineData]);


    useEffect(()=>
    {
      if(googlePolylineData.length>10)
      {
        dispatch(fetchTollGuruTollData(googlePolylineData));
      }
    },[googlePolylineData])


    if (GOOGLE_DATA_LOADING || TOLLGURU_DATA_LOADING) {
      return <h2>Loading...</h2>;
    }
    if(TOLLGURU_DATA_SUCCESS)
    {
      let {route}=tollGuruTollData;
      let {hasTolls,tolls}=route;
      if(hasTolls)
      {
        for(let items of tolls)
        {
          if(items.id>10)
          {
            gates.push({coordinates:[items.lat,items.lng],name:items.name})
          }
          else 
          {
            continue;
          }
        }
      }
    }


  return (
    <section>
      <div className="input-section">
        <input
          type="text"
          name="source"
          value={inputs.source}
          onChange={handelChange}
        />
        <input
          type="text"
          name="destination"
          value={inputs.destination}
          onChange={handelChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      <MapContainer
        center={decoded[0] || [30.82272, 76.9407]}
        zoom={13}
        style={{ width: "500px", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={decoded}/>
        {gates.length>0 && gates.map((item)=>
        {
          return (
            <Marker
              position={item.coordinates}
              icon={icon}
            >
              <Popup>{item.name}</Popup>
            </Marker>
          );
        })}
        {console.log(gates)}
      </MapContainer>
    </section>
  );
}

export default LeafletMap