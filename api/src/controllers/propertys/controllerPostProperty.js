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
  owner,
  precio,
  creacion,
}) => {
/*   if (
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
    !images
  ) {
    return "Faltan datos";
  } */

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
    owner,
    precio,
    creacion,
  });
  return newProperty;
};

module.exports = controllerPostProperty;
