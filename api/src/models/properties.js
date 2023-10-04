const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  //Venta o alquiler
  operation: {
    type: String,
    required: true,
  },
  //Tipo de propiedad
  property: {
    type: String,
    required: true,
  },
  //Ambientes
  environments: {
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
  //Cochera
  garage: {
    type: Boolean,
  },
  //Mts cuadrados
  area: {
    type: Number,
  },
  //Disponibilidad
  availability: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
    //unique: true,
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
    zone: {
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
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Properties", propertiesSchema);
