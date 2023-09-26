const handlerGetUsers = require("../handlers/handlerGetUsers");
const handlerPostUser = require("../handlers/handlerPostUser");
const handlerPutUsers = require("../handlers/handlerPutUsers");

const routerUser = require("express").Router();

routerUser.post("/", handlerPostUser);

routerUser.get("/", handlerGetUsers);

routerUser.put("/", handlerPutUsers);

module.exports = routerUser;
