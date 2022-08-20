const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const bookModel = require("../models/bookModel");

//===========================================================================================//

const createBook = async function (req, res) {
  let data = req.body;
  let authord = data.author_id;
  let publisherd = data.publisher_id;
  let isValid1 = mongoose.Types.ObjectId.isValid(authord);
  let isValidp = mongoose.Types.ObjectId.isValid(publisherd);
  if (!authord || !publisherd) {
    return res.send({ msg: "Enter author_id and publisher_id" });
  }
  if (isValid1 === false) {
    return res.send("Invalid length of author_id");
  } else if (isValidp === false) {
    return res.send("Invalid length of publisher id ");
  }
  let result = await authorModel.findById(authord);
  let result2 = await publisherModel.findById(publisherd);
  console.log(result, result2);
  if (!result && !result2) {
    return res.send({ msg: "Enter valid author_id or publisher_id" });
  } else {
    let finalData = await bookModel.create(data);
    return res.send({ msg: finalData });
  }
};
//==============================================================================================//

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel
    .find()
    .populate(["author_id", "publisher_id"]);
  res.send({ data: specificBook });
};

//==============================================================================================//


const priceIncrease = async function (req, res) {
let allBook = await publisherModel.find({ name: ['Penguin', 'HarperCollins'] }).select({ _id: 1 })
    let result = await bookModel.updateMany({ publisher_id: allBook }, { $set: { isHardCover: true, new: true } }, { upsert: true })

    let data = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let result2 = await bookModel.updateMany({ author_id: data }, { $inc: { price: 10 } }, { upsert: true })
    res.send({data: result, result2})
}
//_________________________________________________________________________________________________
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.createBook = createBook;
module.exports.priceIncrease = priceIncrease;
