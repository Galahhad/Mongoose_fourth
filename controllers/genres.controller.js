const Genre = require("../models/Genre.model");
module.exports.genresControllers = {
  postGenre: async (req, res) => {
    try {
      const { title, description } = req.body;
      const data = await Genre.create({ title, description });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const data = await Genre.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const data = await Genre.find({});
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
