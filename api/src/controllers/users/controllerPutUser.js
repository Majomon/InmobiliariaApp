const User = require("../../models/users");

const controllerPutUser = async (id, { name, age, email }) => {
  const upUser = await User.findByIdAndUpdate(id, { name, age, email });
  return upUser;
};

module.exports = controllerPutUser;
