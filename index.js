require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server started successfully with jenkins pipeline")
})
app.get("/test",(req,res)=>{
    res.json("test is test route for jenkins pipeline")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});