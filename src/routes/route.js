const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/createBook", bookController.createBook);

router.get("/getBooksList", bookController.getBooksList);

router.get("/getBooksByYear", bookController.getBooksInYear);

router.get("/getParticularBooks", bookController.getParticularBooks);

router.get("/getXINRBooks", bookController.getXINRBooks);

router.get("/getRandomBooks", bookController.getRandomBooks);

module.exports = router;