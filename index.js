// Modules and Globals
const express = require("express");
const app = express;
const mongoose = require("mongoose");
const cors = require('cors')


// Express Settings
require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
require('dotenv').config()

// connect mongoose
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// Controllers & Routes
app.use("/books", require("./controllers/books.controller"));

// Homepage
app.get("/", (req, res) => {
  res.render("Home");
});

// Books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// WILDCARD ROUTE - 404
app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections, keeps server open
app.listen(process.env.PORT);
