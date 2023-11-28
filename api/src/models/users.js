const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  admin: {
    type: Boolean,
    require: false,
  },
});

module.exports = mongoose.model("User", userSchema);
