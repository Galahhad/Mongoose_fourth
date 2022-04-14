const { Router } = require("express");
const { booksControllers } = require("../controllers/books.controller");

const router = Router();

router.post("/book", booksControllers.postBook);
router.delete("/book/:id", booksControllers.deleteBook);
router.patch("/book/:id", booksControllers.patchBookById);
router.get("/book/:id", booksControllers.getBookById);
router.get("/books", booksControllers.getAllBooks);
router.get("/genre/:id/books", booksControllers.getBooksByGenre);

module.exports = router;
