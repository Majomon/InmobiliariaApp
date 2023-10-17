const controllerGetSearch = require("../../controllers/search/controllerGetSearch");

const handlerGetSearch = async (req, res) => {
  const { operation, typeProperty, province, zone, bedrooms } = req.body;
  const responseData = {
    operation,
    typeProperty,
    province,
    zone,
    bedrooms: Number(bedrooms),
  };
  try {
    const dataQuery = await controllerGetSearch(responseData);
    res.status(200).json(dataQuery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetSearch;
