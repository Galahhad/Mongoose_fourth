const Author = require('../models/Author.model');
module.exports.authorsControllers = {
  getAuthors: async (req, res) => {
    try {
      const data = await Author.find({});
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  postAuthor: async (req, res) => {
    try {
      const { name, biography } = req.body;
      const data = await Author.create({ name, biography });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const data = await Author.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};