const mongoose = require('mongoose'); 

const authorSchema = new mongoose.Schema
( {
    
    author_name: String,
    age: Number,
    rating: Number,
}, {timestamps: false});

module.exports = mongoose.model('Author', authorSchema);