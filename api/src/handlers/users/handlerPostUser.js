const controllerPostUser = require("../../controllers/users/controllerPostUser");

const handlerPostUser = async (req, res) => {
  const { name, email, password,isAdmin } = req.body;
  try {
    const user = await controllerPostUser({ name, email, password,isAdmin });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostUser;
