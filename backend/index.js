// const express = require('express');
// const dotenv = require("dotenv")

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config()


const PORT =process.env.PORT || 4000

const URI =process.env.MongoDBURLI


// app.get('/', (req, res) => {
//   res.send('my first project hello pooja') No need this example which i have taken from express example
// })


//  connect to mongoDb 

 try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });

  console.log("connected to mongoDb")

 } catch(error){
    console.log("Error",error)

 }
 
// defineing route here
app.use("/book",bookRoute);

app.use("/user", userRoute)



app.listen( PORT, () => {
  console.log(`Example app listening on port ${ PORT}`)
})
