const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "majomon",
  api_key: "814512663123947",
  api_secret: "Ll89iRjrUGw6serOb21Bj-FBgyE",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "nextjs",
    format: async (req, file) => {
      "jpg", "png";
    }, // supports promises as well
    public_id: (req, file) => {
      console.log(
        new Date().toISOString().replace(/:/g, "-") + file.originalname
      );
      return new Date().toISOString().replace(/:/g, "-") + file.originalname;
    },
  },
});

const parser = multer({ storage: storage });

module.exports = parser; // Cambiar la forma de exportar el parser