const postUserValidation = require("../../controllers/login/controllerPostLoginValidation");

const handlerPostUserValidation = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await postUserValidation({ email, password })
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;
