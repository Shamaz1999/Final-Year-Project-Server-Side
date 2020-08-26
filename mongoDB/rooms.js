var mongoose = require("mongoose")
const roomsSchema = {
    person1: String,
    person2: String,
    date: {
        type: Date,
        default: Date.now()
    }
}
const rooms = mongoose.model('Rooms', roomsSchema);
module.exports = rooms