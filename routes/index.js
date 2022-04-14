const { Router } = require("express");

const router = Router();

router.use(require("./books.route"));
router.use(require("./genres.route"));
router.use(require("./reviews.route"));
router.use(require("./authors.route"));

module.exports = router;
