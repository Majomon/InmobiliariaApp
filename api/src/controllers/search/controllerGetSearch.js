const Property = require("../../models/properties");

const controllerGetSearch = async (dataQuery) => {
  // Realiza una búsqueda inicial para obtener todos los datos
  const allProperties = await Property.find({});
  
  const filteredProperties = allProperties.filter((property) => {
    return (
      (!dataQuery.operation || property.operation === dataQuery.operation) &&
      (!dataQuery.typeProperty || property.property === dataQuery.typeProperty) &&
      (!dataQuery.province || property.address.province === dataQuery.province) &&
      (!dataQuery.zone || property.address.zone === dataQuery.zone) &&
      (!dataQuery.bedrooms || property.bedrooms === dataQuery.bedrooms)
    );
  });

  return filteredProperties;
};

module.exports = controllerGetSearch;
