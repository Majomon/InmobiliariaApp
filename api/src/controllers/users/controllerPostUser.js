const User = require("../../models/users");

const controllerPostUser = async ({ name, email, password, admin }) => {
  if (!name || !email || !password) {
    return "Faltan datos";
  }
  const newUser = await User.create({ name, email, password, admin });

  return newUser;
};

module.exports = controllerPostUser;
