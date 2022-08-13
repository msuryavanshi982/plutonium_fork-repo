const bookModel = require('../model/bookModel');

const createBook = async function(req, res){
    let data = req.body

    let book = await bookModel.create(data)
    res.send({msg:"Book has been created", data:book, })
}

const getBooks = async function(req,res){
    let allBooks = await bookModel.find()
    res.send({msg:"List of books",data:allBooks})
}
module.exports.createBook = createBook;
module.exports.getBooks = getBooks;