require('dotenv').config()
const express = require("express");
var bodyParser = require('body-parser')
const singleMovementRouter = require("./src/routes/movements/singleMovement.js");
const movementsRouter = require("./src/routes/movements/movements.js");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/singlemovement', singleMovementRouter);
app.use('/movements', movementsRouter);


app.listen(port, () => {
  console.log(`Server started at ${port}`)
})