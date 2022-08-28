const ordersModel= require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
    let order = req.body;
    let userId = order.user_id;
    let saveOrder = await userModel.findById(userId);
    if(!saveOrder) {
        return res.send({ msg: "user doesn't exist "});
    }

    let productId = order.product_id;
    let saveProduct = await productModel.findById(productId);
    res.send({data: saveProduct});
    if(!saveProduct) {
        return res.send({ msg: "product doesn't exist" });
    }

    //scenario1=> For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document
    if(!req.appTypeFree && saveOrder.balance >= saveProduct.price) {
        saveOrder.balance = saveOrder.balance - saveProduct.price;
        await saveOrder.save();
        order.amount = saveProduct.price;
        order.isFreeAppUser = false;
        let orderCreated = await ordersModel.create(order);
        return res.send({ data: orderCreated});

    //scenario2=> For paid app user and the user has insufficient balance. We send an error that the user doesn't have enough balance
    } else if (!req.appTypeFree) {
        return res.send({ msg: "user doesn't have sufficient balance "});
        
    //scenario3=> For free app user, we dont check user's balance and create the order with 0 amount.
    } else {
        order.amount = 0;
        order.isFreeAppUser = true;
        let orderCreated = await ordersModel.create(order);
        res.send({ data: orderCreated});
    }
}

module.exports.createOrder = createOrder;