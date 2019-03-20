var express = require('express');
var server=express();
var bodyParser = require("body-parser");
require('./mongoDB/mongoconnection')
var User = require("./mongoDB/user-model");
var Contact = require("./mongoDB/contact-modal")
var Post = require('./mongoDB/post-ad-model')


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
        console.log("Data inserted : User Added")
    })
})

server.post('/contact',(req,res)=>{
    res.send(req.body);
    console.log(req.body);

    var contact = new Contact(req.body)
    contact.save((err,data)=>{
        if(err)
        console.log(err)
        else
        console.log("Data inserted : Contact Request Recieved")
    })
})

server.post('/postad',(req,res)=>{
    res.send(req.body);
    console.log(req.body);

    var post = new Post(req.body)
    post.save((err,data)=>{
        if(err)
        console.log(err)
        else
        console.log('Data inserted : Ad Post data saved')
    })

})

server.post('/login',(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email:email,password:password},(err,data)=>{
        if(err)
        console.log(err)
        else
        console.log(data)
        res.send(data)
    })

})

// server.post('/allads',(req,res)=>{

//     Post.find({},(err,ads)=>{
//         res.send(ads.reduce((adsMap, item)=>{
//             adsMap[item.id] = item
//             return adsMap;
//         }, {} ))
//     })
// })

server.post('/allads',(req,res)=>{

    // Post.find({}).then((ads)=>{
    //     res.send(ads)
    // })
    Post.find({},(err,data)=>{
        if (err)
        console.log(err)
        else
        res.send(data)

    })
})



server.listen(8000, () => console.log("server is running at port 8000"))