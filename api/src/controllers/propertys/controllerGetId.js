const Property = require("../../models/properties");

const controllerGetId = async (id) => {
  const property = await Property.findById(id)
  console.log(property);
  return property;
};

module.exports = controllerGetId;
