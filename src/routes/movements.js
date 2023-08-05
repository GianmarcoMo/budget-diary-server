const express = require("express");
const movementsController = require("../controllers/movementsController.js")
const movementsRouter = express.Router();

movementsRouter.get('/', (req, res, next) => {
    try {
        const result = movementsController.getAllMovements();
        res.send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});
movementsRouter.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const result = movementsController.getMovementById(id);
        res.send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


module.exports = movementsRouter;