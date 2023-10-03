const Property = require("../../models/properties");

const controllerPostProperty = async ({
  operation,
  property,
  environments,
  bedrooms,
  bathrooms,
  area,
  availability,
  name,
  description,
  address,
  images,
  price,
}) => {
  if (
    !operation ||
    !property ||
    !environments ||
    !bedrooms ||
    !bathrooms ||
    !area ||
    !availability ||
    !name ||
    !description ||
    !address ||
    !images ||
    !price
  ) {
    return "Faltan datos";
  }

  const newProperty = await Property.create({
    operation,
    property,
    environments,
    bedrooms,
    bathrooms,
    area,
    availability,
    name,
    description,
    address,
    images,
    price,
  });
  return newProperty;
};

module.exports = controllerPostProperty;
