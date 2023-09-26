const controllerPutUser = require("../controllers/controllerPutUser");

const handlerPutUsers = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { name, age, email } = req.body;
    const updateUser = await controllerPutUser({ id, name, age, email });
    res.status(200).json("Usuario modificado" + updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUsers;
