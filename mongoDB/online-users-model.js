var mongoose = require("mongoose")
const roomsSchema = {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    socketId: String
}
const rooms = mongoose.model('Online-Users', roomsSchema);
module.exports = rooms