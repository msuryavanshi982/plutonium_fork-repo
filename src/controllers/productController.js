const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    let product = req.body;
    let saveProduct = await productModel.create(product);
    res.send({msg: saveProduct});
}

module.exports.createProduct = createProduct;