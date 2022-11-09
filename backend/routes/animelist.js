const express = require("express");
const router = express.Router();
const animeListController = require('../controllers/animeListController');

router.get("/", animeListController.returnEntireAnimeList);
router.get("/:contains", animeListController.returnAnimeList);

module.exports = router;
