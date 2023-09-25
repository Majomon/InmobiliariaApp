require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a mi base de datos en MongoDB"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));
