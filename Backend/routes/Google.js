import express from 'express'
import HandleGoogleApi from '../controllers/HandleGoogleApi.js'
let router=express.Router()


router.get('/google',HandleGoogleApi)

export default router
