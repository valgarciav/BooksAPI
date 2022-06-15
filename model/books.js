const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, default: "2022" },
  quantity: { type: Number, default: "0" },
  pic: { type: String, default: "http://placekitten.com/350/350" },
});

const book = mongoose.moel("Books", booksSchema);
module.exports = book;
