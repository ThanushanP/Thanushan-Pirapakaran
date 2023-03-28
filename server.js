//TO RUN: node server.js

const Resume = require("./Resume");

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

let PORT = process.env.PORT || 3000;

app.use (cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://User:data123@portfolio.fydnlbw.mongodb.net/Portfolio",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, function(err){
  if (!err){
    console.log("Database connected");
  }
  else {
    console.log(err);
  }
})


app.get("/",(req,res) =>{
  Resume.find({})
    .then((items) =>res.json(items))
    .catch((err) => console.log("error"));
});

app.listen(PORT, function(){
  console.log("server is runnning on "+PORT);
});