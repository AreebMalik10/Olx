const express = require("express");
const app = express();
const mongoose = require ('mongoose');
const UserModel = require ('./models/users')

mongoose.connect("mongodb+srv://areeb:Cust1234@cluster0.vybdawe.mongodb.net/Olx?retryWrites=true&w=majority&appName=Cluster0")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result)= =>{
         if(err) {
            res.json(err);
         } else {
            res.json(result);
         }
    });

    
});

app.listen(3001, () => {
    console.log("Server runs Perfectly");
});