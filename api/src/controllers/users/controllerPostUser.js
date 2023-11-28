const User = require("../../models/users");
const bcrypt = require("bcryptjs");

const controllerPostUser = async ({ name, email, password, isAdmin }) => {
  if (!name || !email || !password) {
    return "Faltan datos";
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
    isAdmin,
  });

  return newUser;
};

module.exports = controllerPostUser;
