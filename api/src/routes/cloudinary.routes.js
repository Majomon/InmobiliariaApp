const handlerPostCloudinary = require("../handlers/cloudinary/handlerPostCloudinary");
const parser = require("../utils/cloudinary"); 
const cloudinaryRouter = require("express").Router();

// Usar el parser como un middleware en la ruta POST
cloudinaryRouter.post("/", parser.array("img", 12), handlerPostCloudinary);

module.exports = cloudinaryRouter;
