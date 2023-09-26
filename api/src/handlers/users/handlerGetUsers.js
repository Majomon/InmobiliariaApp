const controllerGetUser = require("../../controllers/users/controllerGetUsers");

const handlerGetUsers = async (req, res) => {
  try {
    const getUsers = await controllerGetUser();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUsers;
