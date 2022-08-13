const express = require('express');
const {default:mongoose} = require('mongoose');
const route = require('../src/routes/routes');
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended:true}));

let url = "mongodb+srv://plutonium:htEPohhzxGsMLQQo@cluster0.lcxjxcs.mongodb.net/test";
let port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser:true}).then(()=>console.log("MongoDB is connected")).catch(err=>console.log(err));

app.use('/', route);

app.listen(port, function(){
    console.log(`express is running on ${port}`)
});
