const express = require("express");
const movementsController = require("../../controllers/movementsController.js")
const movementsRouter = express.Router();

movementsRouter.get('/', async (req, res, next) => {
    try {
        const data = await movementsController.getAllMovements();
        res.send(data)
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = movementsRouter;