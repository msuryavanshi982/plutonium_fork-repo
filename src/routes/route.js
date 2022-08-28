const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const productController= require("../controllers/productController");
const orderController= require("../controllers/orderController");
const validateHeader = require("../middlewares/validator");

router.post("/createProduct", productController.createProduct);

router.post("/createUser",validateHeader.valHeader,userController.createUser);

router.post("/createOrder", validateHeader.valHeader,orderController.createOrder);

module.exports = router;