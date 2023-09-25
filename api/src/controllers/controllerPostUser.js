const userSchema = require("../models/users");

const controllerPostUser = async ({ name, age, email }) => {
  if (!name || !age || !email) {
    return "Faltan datos";
  }
  const newUser = userSchema({ name, age, email });
  newUser.save();

  return newUser;
};

module.exports = controllerPostUser;
