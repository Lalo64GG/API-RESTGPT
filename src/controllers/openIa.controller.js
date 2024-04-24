const openaiService = require('../services/openIa.service');

async function updatePdfPrompt(req, res) {
    const newPrompt = req.body.text;
    try {
        const result = await openaiService.updatePdfPrompt(newPrompt);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function processChat(req, res) {
    const userPrompt = req.body.prompt;
    try {
        const result = await openaiService.processChat(userPrompt);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    updatePdfPrompt,
    processChat
};
