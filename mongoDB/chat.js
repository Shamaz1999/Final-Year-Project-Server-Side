var mongoose = require("mongoose")
const chatSchema = {
    message: String,
    room: {
        type: mongoose.Schema.Types,
        ref: "Rooms"
    },
    sender: {
        type: mongoose.Schema.Types,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now(),
    }
}
const chat = mongoose.model('Chat', chatSchema);
module.exports = chat