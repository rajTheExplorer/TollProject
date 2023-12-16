import axios from "axios";
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

let HandleGoogleApi = async (req, res) => {
  let { source, destination } = req.body;
  let response = await axios.get(`
        https://maps.googleapis.com/maps/api/directions/json?origin=${source}&destination=${destination}&key=${process.env.GOOGLE_API}
    `);
    return res.send(response.data.routes[0].overview_polyline.points)
};


export default HandleGoogleApi