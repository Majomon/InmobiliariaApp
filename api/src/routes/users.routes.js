const handlerPostUser = require("../handlers/users/handlerPostUser");
const handlerGetUsers = require("../handlers/users/handlerGetUsers");
const handlerPutUsers = require("../handlers/users/handlerPutUsers");
const handlerLoginValidate= require("../handlers/users/handlerPostLoginValidation")

const routerUser = require("express").Router();

routerUser.get("/", handlerGetUsers);

routerUser.post("/login", handlerLoginValidate);

routerUser.put("/:id", handlerPutUsers);

routerUser.post("/", handlerPostUser);

module.exports = routerUser;

/* 
    (req,res)=>{
        res.status(200).json("hola")
    }
*/
