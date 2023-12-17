import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

let HandleTollGuruApi=async (req,res)=>
{
    let polyline=req.body
    console.log(polyline)
    if(!polyline)
    {
        return res.send("Invalid Creds")
    }
    let headers={
        "x-api-key":process.env.TOLL_GURU_KEY
    }
    try 
    {
        let response = await axios.post(`https://dev.tollguru.com/v1/calc/route`,polyline,{headers});
        if(response.status==="200 OK")
        {
            return res.send(response.data);
        }
        else 
        {
            return res.send("Invalid Request")
        }

    }
    catch(e)
    {
        console.log(e)
    }
}


export default HandleTollGuruApi