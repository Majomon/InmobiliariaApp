const cloudinary = require("cloudinary").v2;
// Importar el parser desde cloudinary.js

const controllerPostCloudinary = async (req) => {
  // Recibir el objeto req como parámetro
  const images = req.files; // Acceder al arreglo de archivos
  if (!images || images.length === 0) {
    throw new Error("No se subieron las imágenes");
  }

  // Subir las imágenes a Cloudinary y obtener las URL seguras
  const urls = await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve, reject) => {
          cloudinary.uploader.upload(
            image.path,
            { folder: "express" }, // Opcional: especificar una carpeta diferente para Express
            (err, result) => {
              if (err) {
                reject(err);
              }
              resolve(result.secure_url);
            }
          );
        })
    )
  );

  // Devolver el arreglo de URLs como parte de la respuesta
  return { message: "Imágenes subidas", urls: urls };
};

module.exports = controllerPostCloudinary;
