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
    type: Number,
    required: false,
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
  //Estado
  state: {
    type: String,
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
  services: {
    //Airea acondicionado
    airConditioning: {
      type: Boolean,
      default: false,
    },
    //Agua corriente
    runningWater: {
      type: Boolean,
      default: false,
    },
    //Pavimento
    pavement: {
      type: Boolean,
      default: false,
    },
    //Termotanque
    waterHeater: {
      type: String,
      default: false,
    },
    //Luz
    light: {
      type: Boolean,
      default: false,
    },
    //Cocina
    kitchen: {
      type: Boolean,
      default: false,
    },
    //Desague cloacal
    sewageDrain: {
      type: Boolean,
      default: false,
    },
    //Balcon
    balcony: {
      type: Boolean,
      default: false,
    },
    //Lavadero
    laundry: {
      type: Boolean,
      default: false,
    },
    //Patio
    yard: {
      type: Boolean,
      default: false,
    },
    //Vestidor
    dressingRoom: {
      type: Boolean,
      default: false,
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
