// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})

connectDB()
.then (( ) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`connected to MONGODB at PORT ${process.env.PORT}`)
    })
}) 
.catch (err => console.log(`Error connecting to MONGODB: ${err}`))
















/*
import express from "express"

const app = express();

(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => console.log('Error connecting to MongoDB: ', err))
        throw  new Error("MongoDB Connection unsuccessful")
        
        app.listen(process.env.PORT, () => 
            console.log(`App is listening on port: ${process.env.PORT}`)
        )

    } catch (error) {
          console.error("ERROR:", error)
    }
})()
*/