const handlerPostUser = require("../handlers/handlerPostUser");

const routerUser = require("express").Router();

routerUser.post("/", handlerPostUser);

routerUser.get("/", (req, res) => {
  res.status(200).json("Obteniendo usuario");
});

routerUser.put("/", (req, res) => {
  res.status(200).json("Modificicando usuario");
});

module.exports = routerUser;
