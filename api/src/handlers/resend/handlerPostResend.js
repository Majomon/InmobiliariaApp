const controllerPostResend = require("../../controllers/resend/controllerPostResend")

const handlerPostResend = async (req, res) => {
  const { name, email, phone, message,propertyId } = req.body;

  try {
    const newProperty = await controllerPostResend({
      name,
      email,
      phone,
      message,
      propertyId
    });
    res.status(200).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostResend;
