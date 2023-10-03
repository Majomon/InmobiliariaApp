const controllerGetPropertyID = require("../../controllers/propertys/controllerGetPropertyId");

const handlerGetPropertyID = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const getUsers = await controllerGetPropertyID(id);
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetPropertyID;
