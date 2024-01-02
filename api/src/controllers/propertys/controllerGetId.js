const Property = require("../../models/properties");

const controllerGetId = async (id) => {
  const property = await Property.findById(id)
  return property;
};

module.exports = controllerGetId;
