const handlerPostUser = require("../handlers/users/handlerPostUser");
const handlerGetUsers = require("../handlers/users/handlerGetUsers");
const handlerPutUsers = require("../handlers/users/handlerPutUsers");

const routerUser = require("express").Router();

routerUser.get("/", handlerGetUsers);


routerUser.put("/:id", handlerPutUsers);

routerUser.post("/", handlerPostUser);

module.exports = routerUser;
