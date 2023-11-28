const postUserValidation = require("../../controllers/users/controllerPostUserValidation");

const handlerPostUserValidation = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const response = await postUserValidation({ name,email, password })
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;
