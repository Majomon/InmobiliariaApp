const Property = require("../../models/properties");

const controllerPutProperty = async (
  id,
  {
    name,
    description,
    address,
    price,
    images,
    bedrooms,
    bathrooms,
    area,
    availability,
    category,
  }
) => {
  const newProperty = await Property.findByIdAndUpdate(id, {
    name,
    description,
    address,
    price,
    images,
    bedrooms,
    bathrooms,
    area,
    availability,
    category,
  });
  return newProperty;
};

module.exports = controllerPutProperty;
