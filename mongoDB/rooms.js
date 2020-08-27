var mongoose = require("mongoose")
const roomsSchema = {
    person1: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    person2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now()
    }
}
const rooms = mongoose.model('Rooms', roomsSchema);
module.exports = rooms