const Book = require("../models/Book.model");
module.exports.booksControllers = {
  postBook: async (req, res) => {
    try {
      const { title, author, genre } = req.body;
      const data = await Book.create({ title, author, genre });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  patchBookById: async (req, res) => {
    try {
      const { title, author, genre } = req.body;
      const data = await Book.findByIdAndUpdate(req.params.id, {
        title,
        author,
        genre,
      });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getBookById: async (req, res) => {
    try {
      const data = await Book.findById(req.params.id).populate("author genre");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const data = await Book.find({}).populate("author genre");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getBooksByGenre: async (req, res) => {
    try {
      const data = await Book.find({ genre: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
