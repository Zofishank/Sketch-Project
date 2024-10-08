const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type :Number,
        default:0,
    },
    bgColor: String,
    textColor: String,
    penalColor: String,

})

module.exports = mongoose.model("product",productSchema);