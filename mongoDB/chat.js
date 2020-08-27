var mongoose = require("mongoose")
const chatSchema = {
    message: String,
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rooms"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now(),
    }
}
const chat = mongoose.model('Chat', chatSchema);
module.exports = chat