const controllerPutUser = require("../../controllers/users/controllerPutUser");

const handlerPutUsers = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  try {
    const updateUser = await controllerPutUser(id, { name, age, email });
    res.status(200).json(`Usuario: ${name} -> modificado`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUsers;
