import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

let HandleTollGuruApi=async (req,res)=>
{
    let polyline=req.body
    let headers={
        "x-api-key":process.env.TOLL_GURU_KEY
    }
    let response = await axios.post(`https://dev.tollguru.com/v1/calc/route`,polyline,{headers});
    return res.send(response.data)
}

export default HandleTollGuruApi