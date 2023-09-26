const handlerPostProperty = require("../handlers/propertys/handlerPostProperty");

const routerProperty = require("express").Router();

routerProperty.post("/", handlerPostProperty);

module.exports = routerProperty;
