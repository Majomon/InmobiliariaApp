const postUserValidation = require("../../controllers/user/postUserValidation");

const handlerPostUserValidation = async (req, res) => {
  const { name, email, password, admin } = req.body;

  try {
    const response = await postUserValidation({ name,email, password, admin })
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;
