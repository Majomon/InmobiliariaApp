const controllerPostProperty = require("../../controllers/propertys/controllerPostProperty");

const handlerPostProperty = async (req, res) => {
  /*   const {
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
  } = req.body;
 */
  try {
    /*     const newProperty = await controllerPostProperty({
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
    }); */
    const newProperty = await controllerPostProperty(req.body);
    res.status(200).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostProperty;
