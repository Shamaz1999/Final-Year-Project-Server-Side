var express = require('express');
var server=express();
var bodyParser = require("body-parser");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session')

// Database Connection and Models
require('./mongoDB/mongoconnection')
var User = require("./mongoDB/user-model");
var Contact = require("./mongoDB/contact-modal")
var Post = require('./mongoDB/post-ad-model')


server.use(express.static('./build'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.post('/signup', (req , res)=>{ 

    var user = new User(req.body)
    user.save((err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)
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


server.post('/login', (req,res)=>{
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


server.post('/allads',(req,res)=>{
    
    Post.find({},(err,data)=>{
        if (err)
        console.log(err)
        else
        res.send(data)
        
    })
})


server.post('/userads',(req,res)=>{
// console.log(req.body._id)
   
Post.find({sellerId:req.body._id},(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)

    })
})

// Favorite ads
server.post('/favoriteads',(req,res)=>{
    console.log("This is favorite ads req")
    console.log(req.body)
    // var arr = req.body;
    // console.log(arr[0].favid);
    // var dataArr = [];
    // for(var i = 0; i < arr.length; i++){
    //     console.log('inside loop')
      Post.find({_id: {$in:req.body}},(err,data)=>{
        //   console.log('inside data finder')
        if (err)
          console.log(err)
        else{
          console.log(data);
        //   dataArr.push(data)
          res.send(data)
        }
      })
    // }
    // console.log('this is data array')
    // console.log(dataArr)
})

server.post('/categoryads',(req,res)=>{
    
    console.log(req.body)
    
    Post.find({category:req.body.category},(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)
        
    })
})

server.post('/countryads',(req,res)=>{
    
    console.log(req.body)
    
    Post.find({sellerCountry:req.body.country},(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)
        
    })
})


server.post('/searchads',(req,res)=>{
    
    console.log(req.body)
    
    Post.find({adTitle:new RegExp(req.body.search, 'i')},(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)
        
    })
})



server.post('/updateuser',(req,res)=>{
    
    // console.log("This is update user request")
    // console.log(req.body)   

    User.findById(req.body.user._id,(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)

    })
})

server.post('/sellerprofile',(req,res)=>{
    console.log(req.body)
console.log("This is seller profile request")


    User.findById(req.body.sellerId,(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log(data)
        res.send(data)

    })
})

server.post('/updateinfo',(req,res)=>{
    var id = req.body.id;
    
    User.findByIdAndUpdate(id,{
        $set:{name:req.body.name,password:req.body.password,phone:req.body.phone,about:req.body.about}},{new:true},(err,data)=>{
            if (err)
            console.log(err)
            else
            res.send(data)
            
        })
    })



    //Add Favorite Ads Route
    server.post('/markfavorite',(req,res)=>{
        
        console.log("This is favorite req ");
        var id = req.body.user._id
        User.findByIdAndUpdate(id,{$addToSet: {favorites: {favid: req.body.id}}},{new:true},(err,data)=>{
            if(err)
            console.log('This is error' +err)
            else
            console.log('This is the data '+data)
            res.send(data)
        })
    
    })



    //Remove Favorite Ads Route
    server.post('/removefavorite',(req,res)=>{

        console.log("This is remove favorite req ");
        var id = req.body.user._id
        User.findByIdAndUpdate(id,{$pull: {favorites: {favid: req.body.id}}},(err,data)=>{
            if(err)
            console.log('This is error' + err)
            else
            console.log('This is the data '+ data)
            res.send(data)
        })
           
    
    })

server.post('/deleteuser',(req,res)=>{
    var id = req.body.id;
   
    User.findByIdAndRemove(id,(err,data)=>{
        if (err)
        console.log(err)
        else
        console.log('User Delted')
        res.send(data)

    })
})



server.post('/currentad',(req,res)=>{
    console.log(req.body)
    console.log("This is current add req")

    id = req.body.id
    
    Post.findById(id,(err,data)=>{
        if (err){
            console.log(err)
            res.send(err)
        }
        else
            res.send(data)
            console.log(data)
    })
})

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`server is running at port ${PORT}`))