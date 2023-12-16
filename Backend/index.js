import express from 'express'
let app=express()

app.use(express.json())

app.use('/polyline')


let start=()=>
{
    app.listen((process.env.PORT || 2000),()=>
    {
        console.log(`Listening to port ${process.env.PORT}`)
    })
}

start()