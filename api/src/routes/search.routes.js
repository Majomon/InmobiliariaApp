const routerSearch = require("express").Router();

routerSearch.get("/", (req, res) => {
  res.status(200).json("Hola");
});

module.exports = routerSearch;
