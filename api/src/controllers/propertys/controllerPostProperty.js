const Property = require("../../models/properties");

const controllerPostProperty = async ({
  operation,
  property,
  environments,
  bedrooms,
  bathrooms,
  area,
  garage,
  state,
  availability,
  name,
  description,
  address,
  services,
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
    !garage ||
    !state ||
    !availability ||
    !name ||
    !description ||
    !address ||
    !services ||
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
    garage,
    state,
    availability,
    name,
    description,
    address,
    services,
    images,
    price,
  });
  return newProperty;
};

module.exports = controllerPostProperty;
