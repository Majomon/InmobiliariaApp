const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerUser = require("./routes/users.routes");

//Rutas

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// Routes
app.use("/users",routerUser)

module.exports = app;
