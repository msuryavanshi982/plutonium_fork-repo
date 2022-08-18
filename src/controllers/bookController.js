const bookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel");

const createBook = async function (req, res) {
    let book = req.body;
    let savedBooks = await bookModel.create(book)
    res.send({msg: savedBooks})
};

const createAuthor = async function(req,res){
    let author = req.res;
    let savedAuthor = await authorModel.create(author);
    res.send({msg:savedAuthor});
}

const getBooksByChetanBhagat = async function (req, res) {
    let data = await authorModel.find({author_name: "Chetan Bhagat"});
    let id = data[0].author_id;
    let bookData = await bookModel.find({author_id:id})
    res.send({ msg: bookData })
}

const updateBookPrice = async function (req, res) {
    let data = {price: 100};
    let authorsData = await bookModel.findOneAndUpdate(
        {name : "Two States"}, //condition  
        {$set: data}, //update in data
        {new: true, upsert: true}).select
        ({name: 1, _id:0, price: 1, author_id: 1})
    res.send({ msg: authorsData });    
};

const getBooksByCost = async function (req, res) {
    let data = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 });
    let id = data.map((e) => e.author_id);
    let result = [];
    const author = await authorModel.find({ author_id: id }).select({ author_name: 1 });
    result.push(author);
    res.send({ msg: result });
};

module.exports.createBook= createBook;
module.exports.createAuthor = createAuthor;
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat;
module.exports.updateBookPrice = updateBookPrice;
module.exports.getBooksByCost = getBooksByCost;
