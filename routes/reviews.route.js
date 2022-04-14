const { Router } = require("express");
const { reviewsControllers } = require("../controllers/reviews.controller");

const router = Router();

router.post("/book/:id/review", reviewsControllers.postReviewBook);
router.delete("/review/:id", reviewsControllers.deleteReview);
router.get("/book/:id/reviews", reviewsControllers.getBookReviews);

module.exports = router;
