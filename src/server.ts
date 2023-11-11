import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "We're on the road"});
})

app.listen(3000, ()=>{
    console.log("Running");
})