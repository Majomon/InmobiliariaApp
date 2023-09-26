const controllerPutProperty = require("../../controllers/propertys/controllerPutProperty");


const handlerPutProperty = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    address,
    price,
    bedrooms,
    bathrooms,
    area,
    availability,
    category,
  } = req.body;
  try {
    const updateProperty = await controllerPutProperty(id, {
      name,
      description,
      address,
      price,
      bedrooms,
      bathrooms,
      area,
      availability,
      category,
    });
    res.status(200).json(`Propiedad: ${name} -> modificado`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutProperty;
