const mongoose = require("mongoose");

const bookModel = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    price: {
      indianPrice: String,
      euroPrice: String,
    },
    year: {
      type: Number,
      default: 2021,
    },
    tags: ["strings"],
    authorName: {
      type: String,
      required: true,
    },
    totalPages: {
      required: true,
      type: Number,
    },
    stockAvailable: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookModel); //books
