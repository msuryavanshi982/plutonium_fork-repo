const bookModel= require("../models/bookModel");

const createBook = async function (req, res) {
    let book = req.body;
    let savedBooks = await bookModel.create(book)
    res.send({msg: savedBooks})
};

const getBooksList = async function (req, res) {
    let booksList= await bookModel.find().select({bookName: 1, authorName: 1});
    res.send({msg: booksList})
};

const getBooksInYear = async function (req, res) {
    let year = req.body.year;  
    let booksInYear = await bookModel.find({year:{$eq: year}});
    res.send({msg: booksInYear});
};

const getParticularBooks = async function (req, res) {
    let condition = req.body;
    let particularBooks = await bookModel.find(condition);
    res.send({msg: particularBooks});
};

const getXINRBooks = async function (req, res) {
    let indianPrice = await bookModel.find({$or: [{"price.indianPrice": "100INR"}, {"price.indianPrice": "200INR", "price.indianPrice": "500INR"}]});
    res.send({msg: indianPrice});
};

const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModel.find({$or: [{stockAvailable: true}, {totalPages: {$gt: 500}}]});
    res.send({msg: randomBooks});
};

module.exports.createBook= createBook;
module.exports.getBooksList= getBooksList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;