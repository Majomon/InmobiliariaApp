const postUserValidation = require("../../controllers/users/controllerPostLoginValidation");

const handlerPostUserValidation = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await postUserValidation({ email, password });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation; 
