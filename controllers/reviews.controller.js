const Review = require("../models/Review.model");
module.exports.reviewsControllers = {
  postReviewBook: async (req, res) => {
    try {
      const { text, reviewAuthor } = req.body;
      const data = await Review.create({
        text,
        reviewAuthor,
        book: req.params.id,
      });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const data = await Review.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getBookReviews: async (req, res) => {
    try {
      const data = await Review.find({ book: req.params.id }).populate("book");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
