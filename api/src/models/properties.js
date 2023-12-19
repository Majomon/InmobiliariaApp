const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  //Venta o alquiler
  operation: {
    type: String,
  },
  //Tipo de propiedad
  property: {
    type: String,
  },
  //Ambientes
  environments: {
    type: Number,
  },
  //Habitaciones
  bedrooms: {
    type: Number,
  },
  //Baños
  bathrooms: {
    type: Number,
  },
  //Cochera
  garage: {
    type: Number,
  },
  //Mts cuadrados
  area: {
    type: Number,
  },
  //Disponibilidad
  availability: {
    type: String,
  },
  //Estado
  state: {
    type: String,
  },
  name: {
    type: String,

    //unique: true,
  },
  description: {
    type: String,
  },
  address: {
    country: {
      type: String,
    },
    province: {
      type: String,
    },
    zone: {
      type: String,
    },
    street: {
      type: String,
    },
    postalCode: {
      type: String,
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
    },
  ],
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Properties", propertiesSchema);
