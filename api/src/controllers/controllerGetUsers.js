const User = require("../models/users");

const controllerGetUser = async () => {
  const users = await User.find();
  return users;
};

module.exports = controllerGetUser;
