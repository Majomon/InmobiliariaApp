const Property = require("../../models/properties");

const controllerPutProperty = async (
  id,
  {
    operation,
    property,
    environments,
    bedrooms,
    bathrooms,
    area,
    garage,
    state,
    name,
    description,
    address,
    services,
    images,
    owner,
    precio,
    creacion,
  }
) => {
  const newProperty = await Property.findByIdAndUpdate(id, {
    operation,
    property,
    environments,
    bedrooms,
    bathrooms,
    area,
    garage,
    state,
    name,
    description,
    address,
    services,
    images,
    owner,
    precio,
    creacion,
  });
  return newProperty;
};

module.exports = controllerPutProperty;
