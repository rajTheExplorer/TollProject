import axios from "axios";
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

let HandleGoogleApi = async (req, res) => {
  let { source, destination } = req.body;
  if(!source || !destination)
  {
    return res.send("Invalid Creds")
  }
  try 
  {
     let response = await axios.get(`
        https://maps.googleapis.com/maps/api/directions/json?origin=${source}&destination=${destination}&key=${process.env.GOOGLE_KEY}
    `);
    if(response.status==="200 OK")
    {
      return res.send(response.data.routes[0].overview_polyline.points);
    }
    else 
    {
      return res.send("Invalid Request");
    }
  }
  catch(e)
  {
    console.log(e)
  }
};


export default HandleGoogleApi