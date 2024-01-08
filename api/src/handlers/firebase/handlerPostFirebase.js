const appFirebase = require("../../utils/firebase"); // Importa la configuración de Firebase
const controllerPostFirebase = require("../../controllers/firebase/controllerPostFirebase");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const storage = getStorage(appFirebase);

const handlerPostFirebase = async (req, res) => {
  console.log(req);
  try {
    const images = req.files;

    if (!images || images.length === 0) {
      throw new Error("No se subieron las imágenes");
    }

    const uploadTasks = images.map(async (file) => {
      const storageRef = ref(storage, `Ruslux/${file.name}`);
      await uploadBytes(storageRef, file.buffer); // Utiliza file.buffer para subir el archivo
      return getDownloadURL(storageRef);
    });

    const urls = await Promise.all(uploadTasks);
    res.status(200).json({ message: "Imágenes subidas", urls });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostFirebase;
