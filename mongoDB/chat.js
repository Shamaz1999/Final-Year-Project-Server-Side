var mongoose = require("mongoose")
const chatSchema = { 
    name: String, 
    topic: String, 
    comments: String, 
    date: String}
const chat = mongoose.model('Chat',chatSchema);
module.exports = chat