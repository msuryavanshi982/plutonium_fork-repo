const mongoose = require('mongoose');
//QUES :- bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books.

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        trim : true,
        require :true
    },
    authorName :{
        type : String,
        trim : true,
        require :true
    },
    category : {
        type : String,
        trim : true,
        require :true
    },
    year : {
        type : Number,
        trim : true,
        require :true
    } 
},{timestamps:true});

module.exports = mongoose.model("Book",bookSchema)
