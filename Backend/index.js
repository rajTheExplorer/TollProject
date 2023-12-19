import express from 'express'
import env from 'dotenv'
import GoogleRoute from './routes/Google.js'
import TollGuruRoute from './routes/TollGuru.js'
import cors from 'cors'
env.config()
let app=express()


app.use(express.json())
app.use(cors())

app.use('/polyline',GoogleRoute)
app.use('/polyline',TollGuruRoute)



 app.listen(process.env.PORT || 2000,()=>
    {
        console.log(`Listening to port ${process.env.PORT || 2000}`)
    })
