// const express= require("express")
// const dotEnv =require("dotenv")
// // MonGoClient is a className of mongodb and mongodb provided this className
// // const{MongoClient}=require("mongodb")
// const mongoose = require('mongoose')
// const bodyParser = require("body-parser")
// const employeeRoutes= require('./routes/employeeRoutes')

// const app=express();

// const PORT = process.env.PORT || 4500 ;

// dotEnv.config()

// app.use(bodyParser.json())

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//          console.log("MongoDB Connected Successfull")
// })
// .catch((error)=>{
//          console.log("Error", error)
// })


//  app.use('/employees', employeeRoutes)

// // Process.env is a golbal object.
// // MongoClient.connect(process.env.MONGO_URI)
// // .then(()=>{
// //     console.log("MongoDB Connected Successfull")
// // }).catch((error)=>{
// //     console.log("Error",error)
// // })



  
// app.listen(PORT,()=>{
//     console.log(`server started at ${PORT}`)
// })




const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors');

const app = express();

// Load environment variables from .env file
dotEnv.config();

// Define the port from the environment variables or default to 5000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.json())
// Enable CORS for all routes
app.use(cors({
    origin: '*'
}))

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("Error", error);
    });

// Use the employee routes for any endpoint starting with /employees
app.use('/employees', employeeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
