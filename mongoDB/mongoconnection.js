var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/buyAndSell',{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'DB connection error'))
db.once('open', function () {console.log("Seccessfully connected to DB") })