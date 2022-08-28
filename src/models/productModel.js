const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String,
    category: String,
    price: Number,
}, { timestamps: true });


module.exports = mongoose.model('hello', productSchema) //products