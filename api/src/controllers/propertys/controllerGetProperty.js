const Property = require("../../models/properties");

const controllerGetProperty = async () => {
  const property = await Property.find();
  return property;
};

module.exports = controllerGetProperty;
