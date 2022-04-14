const { Router } = require("express");
const { genresControllers } = require("../controllers/genres.controller");

const router = Router();

router.post('/genre', genresControllers.postGenre);
router.delete('/genre/:id', genresControllers.deleteGenre);
router.get('/genres', genresControllers.getAllGenres);

module.exports = router;