import L from 'leaflet'
import { MapContainer, Polyline, TileLayer, useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { decode, encode } from "@googlemaps/polyline-codec";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGooglePolydata } from '../slices/MapSlice';

const LeafletMap = () => {
    let dispatch=useDispatch()
    
    let { googlePolylineData, GOOGLE_DATA_LOADING, GOOGLE_DATA_SUCCESS} =
      useSelector((state) => state.Map);


    let [inputs,setInputs]=useState({
        source:'',
        destination:''
    })
    let [decoded,setDecoded]=useState([])


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


    if(GOOGLE_DATA_LOADING)
    {
        return <h2>Loading...</h2>
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
        zoom={8}
        style={{ width: "500px", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={decoded}/>
      </MapContainer>
    </section>
  );
}

export default LeafletMap