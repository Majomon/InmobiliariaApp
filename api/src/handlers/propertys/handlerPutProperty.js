const controllerPutProperty = require("../../controllers/propertys/controllerPutProperty");

const handlerPutProperty = async (req, res) => {
  const { id } = req.params;
  const {
    operation,
    property,
    environments,
    bedrooms,
    bathrooms,
    area,
    garage,
    state,
    name,
    description,
    address,
    services,
    images,
    owner,
    precio,
    creacion,
  } = req.body;
  try {
    const updateProperty = await controllerPutProperty(id, {
      operation,
      property,
      environments,
      bedrooms,
      bathrooms,
      area,
      garage,
      state,
      name,
      description,
      address,
      services,
      images,
      owner,
      precio,
      creacion,
    });
    res.status(200).json(`Propiedad: ${name} -> modificado`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutProperty;
