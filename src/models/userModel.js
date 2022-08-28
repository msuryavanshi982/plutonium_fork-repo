const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: {
        default: 100,
        type: Number
    },
    address: {
        type: String
    },
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    isFreeAppUser: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema) //users