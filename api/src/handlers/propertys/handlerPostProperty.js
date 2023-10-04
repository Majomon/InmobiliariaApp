const controllerPostProperty = require("../../controllers/propertys/controllerPostProperty");

const handlerPostProperty = async (req, res) => {
  const {
    operation,
    property,
    environments,
    bedrooms,
    bathrooms,
    area,
    garage,
    availability,
    name,
    description,
    address,
    images,
    price,
  } = req.body;

  try {
    const newProperty = await controllerPostProperty({
      operation,
      property,
      environments,
      bedrooms,
      bathrooms,
      area,
      garage,
      availability,
      name,
      description,
      address,
      images,
      price,
    });
    res.status(200).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostProperty;
