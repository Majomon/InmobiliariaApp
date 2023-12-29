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
  owner
}) => {
  if (
    !operation ||
    !property ||
    !environments ||
    !bathrooms ||
    !area ||
    !state ||
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
    owner
  });
  return newProperty;
};

module.exports = controllerPostProperty;
