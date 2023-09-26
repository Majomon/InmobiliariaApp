const User = require("../../models/users");

const controllerPostUser = async ({ name, age, email }) => {
  if (!name || !age || !email) {
    return "Faltan datos";
  }
  const newUser = await User.create({ name, age, email });

  return newUser;
};

module.exports = controllerPostUser;
