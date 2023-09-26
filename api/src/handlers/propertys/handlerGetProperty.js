const controllerGetProperty = require("../../controllers/propertys/controllerGetProperty");

const handlerGetProperty = async (req, res) => {
  try {
    const getUsers = await controllerGetProperty();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetProperty;
