const Property = require("../../models/properties");

const controllerGetId = async (id) => {
  const property = await Property.findById(id)
  const priceCurrency = property.price.currency;
  const priceMount = property.price.mount;
  console.log(priceCurrency);
  return property;
};

module.exports = controllerGetId;
