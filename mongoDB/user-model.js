var mongoose = require("mongoose")
const userSchema = {
    name: String,
    email: String,
    url1: String,
    about: String,
    password: String,
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ad Post"
    }],
    phone: String, gender: String, DOB: String, country: String, address: String, date: String
}
const Users = mongoose.model('User', userSchema);
module.exports = Users