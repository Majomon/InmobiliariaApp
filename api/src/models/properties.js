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
    },
    //Agua corriente
    runningWater: {
      type: Boolean,
    },
    //Pavimento
    pavement: {
      type: Boolean,
    },
    //Termotanque
    waterHeater: {
      type: String,
    },
    //Luz
    light: {
      type: Boolean,
    },
    //Cocina
    kitchen: {
      type: Boolean,
    },
    //Desague cloacal
    sewageDrain: {
      type: Boolean,
    },
    //Balcon
    balcony: {
      type: Boolean,
    },
    //Lavadero
    laundry: {
      type: Boolean,
    },
    //Patio
    yard: {
      type: Boolean,
    },
    //Vestidor
    dressingRoom: {
      type: Boolean,
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
