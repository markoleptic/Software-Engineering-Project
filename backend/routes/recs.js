const express = require('express');
const router = express.Router();
const recsController = require('../controllers/recsController')

router.get("/", recsController.handleRecs);
router.post("/:username", recsController.handleRecs);

module.exports = router;