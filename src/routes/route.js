const express = require("express");
const router = express.Router();  
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");


router.post("/createAuthor", authorController.createAuthor);

router.post("/createPublisher", publisherController.createPublisher);

router.post("/createBook", bookController.createBook);

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails);

router.put("/increasePriceBy10", bookController.priceIncrease);

module.exports = router;