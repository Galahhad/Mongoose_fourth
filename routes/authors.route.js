const { Router } = require("express");
const { authorsControllers } = require("../controllers/authors.controller");

const router = Router();

router.get("/authors", authorsControllers.getAuthors);
router.post("/author", authorsControllers.postAuthor);
router.delete("/author/:id", authorsControllers.deleteAuthor);

module.exports = router;
