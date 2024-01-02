const controllerPostCloudinary = async (req) => {
  const images = req.files; 
  if (!images || images.length === 0) {
    throw new Error("No se subieron las imágenes");
  }

  // Obtener las URLs de las imágenes subidas
  const urls = req.files.map((file) => {
    return file.path; // O utiliza la propiedad 'secure_url' si necesitas la URL de Cloudinary
  });

  // Devolver el arreglo de URLs como parte de la respuesta
  return { message: "Imágenes subidas", urls: urls };
};

module.exports = controllerPostCloudinary;

/* .
const cloudinary = require("cloudinary").v2;

const controllerPostCloudinary = async (req) => {
  const images = req.files;
  if (!images || images.length === 0) {
    throw new Error("No se subieron las imágenes");
  }

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

  return { message: "Imágenes subidas", urls: urls };
};

module.exports = controllerPostCloudinary;
 */
