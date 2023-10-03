const handlerGetProperty = require("../handlers/propertys/handlerGetProperty");
const handlerPostProperty = require("../handlers/propertys/handlerPostProperty");
const handlerPutProperty = require("../handlers/propertys/handlerPutProperty");
const handlerGetPropertyID= require("../handlers/propertys/handlerGetPropertyID")

const routerProperty = require("express").Router();

routerProperty.post("/", handlerPostProperty);

routerProperty.get("/", handlerGetProperty);

routerProperty.get("/:id", handlerGetPropertyID);

routerProperty.put("/:id", handlerPutProperty);



module.exports = routerProperty;
