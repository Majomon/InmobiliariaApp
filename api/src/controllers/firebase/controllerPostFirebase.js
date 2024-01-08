const controllerPostFirebase = async (req) => {
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

module.exports = controllerPostFirebase;
