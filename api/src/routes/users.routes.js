const handlerPostUser = require("../handlers/users/handlerPostUser");
const handlerGetUsers = require("../handlers/users/handlerGetUsers");
const handlerPutUsers = require("../handlers/users/handlerPutUsers");
const handlerPostUserValidation = require("../handlers/users/handlerPostUserValidation");

const routerUser = require("express").Router();

routerUser.get("/", handlerGetUsers);

routerUser.post("/login", handlerPostUserValidation);

routerUser.put("/:id", handlerPutUsers);

routerUser.post("/", handlerPostUser);

module.exports = routerUser;
