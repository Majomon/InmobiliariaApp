const handlerGetProperty = require("../handlers/propertys/handlerGetProperty");
const handlerPostProperty = require("../handlers/propertys/handlerPostProperty");
const handlerPutProperty = require("../handlers/propertys/handlerPutProperty");
const handlerGetId = require("../handlers/propertys/handlerGetId");

const routerProperty = require("express").Router();

routerProperty.post("/", handlerPostProperty);

routerProperty.get("/", handlerGetProperty);

routerProperty.get("/:id", handlerGetId);

routerProperty.put("/:id", handlerPutProperty);

module.exports = routerProperty;
