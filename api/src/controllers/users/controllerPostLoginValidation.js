require("dotenv").config();
const getAllUsers = require("./controllerGetUsers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const controllerPostUserValidation = async (data) => {
  const { email, password } = data;
  const dataUsers = await getAllUsers();
  /*   const userAdmind = process.env.USER_ADMIN;
  const passwordAdmin = process.env.PASS_ADMIN;
  console.log(email);
  console.log(password);
  if (userAdmind != email) throw new Error("El usuario no está registrado");

  if (passwordAdmin != password)
    throw new Error("El usuario no está registrado"); */

  const userFound = dataUsers.find((user) => user.email === email);
  if (!userFound) throw new Error("El usuario no está registrado");

  const comparePassword = await bcrypt.compare(password, userFound.password);

  if (!comparePassword) throw new Error("Contraseña incorrecta");

  const token = jwt.sign(
    {
      id: userFound._id,
      name: userFound.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );

  const user = {
    id: userFound._id,
    name: userFound.name,
    email: userFound.email,
    password: userFound.password,
    isAdmin: userFound.isAdmin,
    token,
  };

  return user;
};

module.exports = controllerPostUserValidation;
