const controllerPostProperty = require("../../controllers/propertys/controllerPostProperty");

const handlerPostProperty = async (req, res) => {
  const {
    name,
    description,
    address,
    images,
    price,
    bedrooms,
    bathrooms,
    area,
    availability,
    category,
  } = req.body;

  try {
    const newProperty = await controllerPostProperty({
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
    res.status(200).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostProperty;
