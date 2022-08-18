const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true
    },
    author_id: {
      type: Number,
      required:true
    },
    price: {
      type: Number,
    },
    ratings: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);