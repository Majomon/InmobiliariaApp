
const handlerGetSearch = async (req, res) => {
  try {
/*     const getUsers = await controllerGetProperty(); */
    res.status(200).json("Hola");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetSearch;
