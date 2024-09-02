//require ('dotenv').config({path: './env'}) //this technique ruined your consistency


import dotenv from "dotenv"


import mongoose from "mongoose";


import connectDB from "./db/index.js";

dotenv.config({path: './env'})   

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch(()=> {
    console.log('MONGO db connection failed!!!', err)
})















/*      First Method 
import express from "express"
const app = express()


                  
                     //EFIE

( async () => {  //DB is always in another continent so use async function
    try{
          await mongoose.connect(`${process.env.MONGO__URL}`)
          app.on("error", (error) => {
                    console.log("Error", error)
                    throw error

          })
          app.listen(process.env.PORT, () => {
                    console.log(`App is listening ${process.env.PORT}`);
          })
    }
      
    catch(error)
    {
       console.error("Error", error)
       throw err
    }
}) ()  
    */