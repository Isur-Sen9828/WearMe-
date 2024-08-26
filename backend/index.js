const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());

dotenv.config();

const mongoUrl = "mongodb://localhost:27017/WearMe";

mongoose.connect(mongoUrl).then(() =>{
    console.log("Database Connected Successfully!");
}).catch((error) =>{
    console.log(error);
});

app.get("/", (req,res) =>{
    res.json("successfully Connected")
})

app.listen(port, (error) =>{
    if (!error) {
        console.log("Server is running on port"+port);
    }else{
        console.log("error"+error);
    }
})
