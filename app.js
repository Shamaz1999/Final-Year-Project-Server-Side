var express = require('express');
var server=express();
var bodyParser = require("body-parser");
require('./mongoDB/mongoconnection')
var User = require("./mongoDB/user-model");


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.post('/signup', (req , res)=>{
    res.send(req.body);
    console.log(req.body)
    
    var user = new User(req.body)
    user.save((err,data)=>{
        if (err)
        console.log(err)
        else
        console.log("Data inserted")
    })
})




server.listen(8000, () => console.log("server is running at port 8000"))