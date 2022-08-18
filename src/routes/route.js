const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController");

router.post("/createBook", bookController.createBook);

router.post("/createAuthor", bookController.createAuthor);

router.get("/getBooksByChetanBhagat", bookController.getBooksByChetanBhagat);

router.get("/updateBookPrice", bookController.updateBookPrice);

router.get("/getBooksByCost", bookController.getBooksByCost);

module.exports = router;