const routerResend = require("express").Router();
const handlerPostResend = require("../handlers/resend/handlerPostResend")

routerResend.post("/", handlerPostResend);

module.exports = routerResend;
