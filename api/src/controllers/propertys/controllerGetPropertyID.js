const Property = require("../../models/properties");

const controllerGetPropertyID = async (id) => {
  const property = await Property.findById(id)
  return property;
};

module.exports = controllerGetPropertyID;
