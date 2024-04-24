const express = require('express');
const router = express.Router();
const openaiController = require('../controllers/openIa.controller');

router.post('/updatePdfPrompt', openaiController.updatePdfPrompt);
router.post('/chat', openaiController.processChat);

module.exports = router;
