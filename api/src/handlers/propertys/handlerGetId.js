const controllerGetId = require("../../controllers/propertys/controllerGetId")

const handlerGetId = async (req, res) => {
  const { id } = req.params;
  try {
    const getProperties = await controllerGetId(id);
    res.status(200).json(getProperties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetId;
