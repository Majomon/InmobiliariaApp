const controllerPostCloudinary = require("../../controllers/cloudinary/controllerPostCloudinary");

const handlerPostCloudinary = async (req, res) => {
  try {
    const postCloudinary = await controllerPostCloudinary(req);
    res.status(200).json(postCloudinary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = handlerPostCloudinary;