const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    country: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  //Habitaciones
  bedrooms: {
    type: Number,
    required: true,
  },
  //Baños
  bathrooms: {
    type: Number,
    required: true,
  },
  //Mts cuadrados
  area: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Properties", propertiesSchema);
