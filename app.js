const express = require('express');
const app=express();
const port = process.env.port ||3000 ;
app.get("/",(req,res)=>{
    res.send("welcome to shoeasy! from nivitha");
})
const server=app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

module.exports={app,server}