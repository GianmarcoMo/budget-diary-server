const express = require("express");
const movementsController = require("../../controllers/movementsController.js")
const singleMovementRouter = express.Router();

singleMovementRouter.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const result = movementsController.getMovementById(id);
        res.send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

singleMovementRouter.post('/', (req, res, next) => {
    try {
        const body = req.body;
        //const result = movementsController.getMovementById(id);
        console.log(body);
        res.send("ok")
    } catch (e) {
        res.status(404).send(e.message);
    }
});


module.exports = singleMovementRouter;