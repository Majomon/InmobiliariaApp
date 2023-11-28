const handlerPostUserValidation = require("../handlers/login/handlerPostLoginValidation");

const routerLogin = require("express").Router();

routerLogin.post("/", handlerPostUserValidation);

module.exports = routerLogin;
