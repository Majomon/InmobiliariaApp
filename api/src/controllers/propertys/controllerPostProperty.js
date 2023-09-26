const Property = require("../../models/properties");

const controllerPostProperty = async ({
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
}) => {
  if (
    !name ||
    !description ||
    !address ||
    !price ||
    !images ||
    !bedrooms ||
    !bathrooms ||
    !area ||
    !availability ||
    !category
  ) {
    return "Faltan datos";
  }

  const newProperty = await Property.create({
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

module.exports = controllerPostProperty;
