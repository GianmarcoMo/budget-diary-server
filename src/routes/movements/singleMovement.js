const express = require("express");
const movementsController = require("../../controllers/movementsController.js")
const singleMovementController = require("../../controllers/singleMovementController");
const singleMovementRouter = express.Router();

singleMovementRouter.get('/', async (req, res, next) => {
    try {
        const id = req.body.id
        const result = await singleMovementController.getMovementById(id);
        if (result === -1) {
            res.status(404).send("Movement not found");
        }
        res.send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

singleMovementRouter.post('/', async (req, res, next) => {
    try {
        const documentToSave = req.body;
        const documentId = await singleMovementController.saveDocument(documentToSave);
        if (documentId === -1) {
            req.status(500).send(`Impossibile to save the document`);
        }
        res.send(`Document saved with id: ${documentId}`);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


module.exports = singleMovementRouter;