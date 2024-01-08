const firebaseRouter = require("express").Router();
const handlerPostFirebase = require("../handlers/firebase/handlerPostFirebase");

// Usar el parser como un middleware en la ruta POST
firebaseRouter.post("/", handlerPostFirebase);

module.exports = firebaseRouter;
