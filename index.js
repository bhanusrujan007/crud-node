const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products",productRoute);

app.get('/',(req,res) =>{
    res.send("hello from API ");
});







mongoose.connect("mongodb+srv://bhanusrujan511:q2UHRu1WESbL8DD1@cluster0.gcovz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to db");
    app.listen(3000,()=>{
        console.log('server is running');
    });
    
})
.catch(() =>{
    console.log("connection failed");
});