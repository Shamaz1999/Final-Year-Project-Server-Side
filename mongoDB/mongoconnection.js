var mongoose = require("mongoose")
mongoose.connect('mongodb+srv://shamaz:shamaz123@cluster0-syhoq.mongodb.net/test?retryWrites=true',{dbName: 'buyandsell'});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'DB connection error'))
db.once('open', function () {console.log("Seccessfully connected to DB") })