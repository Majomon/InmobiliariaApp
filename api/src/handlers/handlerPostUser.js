const controllerPostUser = require("../controllers/controllerPostUser");

const handlerPostUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const user = await controllerPostUser({ name, age, email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostUser;
