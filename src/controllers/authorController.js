const authorModel = require("../models/authorModel");


const createAuthor = async function (req,res) {
    let author = req.body; 
    let authorCreated = await authorModel.create(author);
    res.send({ data: authorCreated}); 
};
//===========================================================================================//
const getAuthorsData = async function (req, res) {
    let authors = await authorModel.find(); 
    res.send({ data: authors}); 
};

//____________________________________________________________________________________________//
module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;