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
    type: Boolean,
    default: true,
  },
  //Estado
  state: {
    type: String,
  },
  //Nombre
  name: {
    type: String,
    //unique: true,
  },
  //Descripción
  description: {
    type: String,
  },
  //Dirección
  address: {
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
  }, //Servicios
  services: {
    //Agua corriente
    runningWater: {
      type: Boolean,
      default: false,
    },
    //Aire acondicionado
    airConditioning: {
      type: Boolean,
      default: false,
    },
    //Balcón
    balcony: {
      type: Boolean,
      default: false,
    },
    //Cocina
    kitchen: {
      type: Boolean,
      default: false,
    },
    //Estacionamiento
    parking: {
      type: Boolean,
      default: false,
    },
    //Gas
    gas: {
      type: Boolean,
      default: false,
    },
    //Gimnasio
    gym: {
      type: Boolean,
      default: false,
    },
    //Lavadero
    laundry: {
      type: Boolean,
      default: false,
    },
    //Electricidad
    light: {
      type: Boolean,
      default: false,
    },
    //Apto mascotas
    petfriendly: {
      type: Boolean,
      default: false,
    },
    //Mucama
    houseMaid: {
      type: Boolean,
      default: false,
    },
    //Parrilla
    grill: {
      type: Boolean,
      default: false,
    },
    //Patio
    yard: {
      type: Boolean,
      default: false,
    },
    //Piscina
    swimmingpool: {
      type: Boolean,
      default: false,
    },
    //Seguridad
    security: {
      type: Boolean,
      default: false,
    },
    //Termotanque
    waterHeater: {
      type: Boolean,
      default: false,
    },
    //Vestidor
    dressingRoom: {
      type: Boolean,
      default: false,
    },
    //Internet
    wifi: {
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
  //Propietario
  owner: {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Properties", propertiesSchema);
