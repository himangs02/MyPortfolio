const express = require("express");
const mongoose = require("mongoose");
const { mongo } = require("mongoose");
const app=express();
require("dotenv").config();
const path=require("path");
const port=3000;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index.html"));
// })
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("connected to database");
}).catch((error)=>{
    console.log(error);
})
const formSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
})
const Form=mongoose.model("Form",formSchema);
app.post("/submit",async(req,res)=>{
    try {
        console.log("BODY RECEIVED:", req.body);
        let newForm=await Form.create({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message

        })
        

        res.status(200).json({newForm});
    } catch (error) {
        res.status(400).json({error:error.message});
        console.log(error);
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})