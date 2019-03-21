var mongoose = require("mongoose")
const userSchema = { name: String, email: String, url1:String, password: String, phone: String, gender: String, DOB: String, country: String, address: String, date: Date}
const Users = mongoose.model('User',userSchema);
module.exports = Users