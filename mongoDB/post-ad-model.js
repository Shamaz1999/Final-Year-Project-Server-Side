var mongoose = require("mongoose")
const adPostSchema = { adTitle: String, brand: String, sellerId:String, sellerName: String, condition:String ,category: String, price: Number, location: String, description: String, phone: String, date: Date, url1: String, url2: String, url3: String, url4: String}
const adPost = mongoose.model('Ad Post',adPostSchema);
module.exports = adPost