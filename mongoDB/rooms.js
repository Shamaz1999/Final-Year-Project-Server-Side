var mongoose = require("mongoose")
const roomsSchema = { 
    name: String, 
    topic: String, 
    comments: String, 
    date: String}
const rooms = mongoose.model('Rooms',roomsSchema);
module.exports = rooms