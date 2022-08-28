const express = require('express');
const {default:mongoose} = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js')
const app = express();

app.use(bodyParser.json());

let url = "mongodb+srv://plutonium:htEPohhzxGsMLQQo@cluster0.lcxjxcs.mongodb.net/ML_003";
let port = process.env.PORT||3000;

mongoose.connect(url,{useNewUrlParser:true})
.then(()=> console.log("MongoDB is connected"))
.catch((err)=>console.log(err));

app.use('/', route);

app.listen(port, function(){
    console.log(`Express app is running on ${port}`)
});
