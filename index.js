const express = require("express");
const mongoose = require("mongoose");

const port = 4000;

const app = express();

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/books"
  )
  .then(() => {
    app.listen(port, () => console.log("Server has been started"));
  });
