const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {
    user_id: ObjectId,
    product_id: ObjectId,
    isFreeAppUser: Boolean,
    date: String,
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);