const express = require("express");
const movementsRouter = require("./src/routes/movements.js");
const app = express();
const port = 3001;

app.use('/movements', movementsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})