const handlerGetProperty = require("../handlers/propertys/handlerGetProperty");
const handlerPostProperty = require("../handlers/propertys/handlerPostProperty");

const routerProperty = require("express").Router();

routerProperty.post("/", handlerPostProperty);

routerProperty.get("/", handlerGetProperty);


module.exports = routerProperty;
