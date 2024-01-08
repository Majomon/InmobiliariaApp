import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import appFirebase from "../utils/firebase";
const storage = getStorage(appFirebase);

function ImgFirebase() {
  const [files, setFiles] = useState([]); // Estado para almacenar los archivos
  const [imageUrls, setImageUrls] = useState([]); // Estado para almacenar las URLs de las imágenes

  const fileHandler = async (e) => {
    const fileList = Array.from(e.target.files); // Obtener la lista de archivos
    setFiles(fileList); // Actualizar el estado con la lista de archivos

    // Subir cada archivo al almacenamiento y obtener sus URL
    const uploadTasks = fileList.map(async (file) => {
      const storageRef = ref(storage, `Ruslux/${file.name}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    // Esperar a que todas las tareas de carga de archivos se completen y obtener las URL
    Promise.all(uploadTasks)
      .then((urls) => {
        setImageUrls(urls); // Actualizar el estado con la lista de URL de las imágenes
        console.log("URLs de las imágenes subidas:", urls);
      })
      .catch((error) => {
        console.error("Error al subir las imágenes:", error);
      });
  };

  return (
    <div className="my-20">
      <h3>Agregar imágenes</h3>
      <input type="file" multiple onChange={fileHandler} />
      {files.length > 0 && (
        <div>
          <h4>Archivos seleccionados:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      {imageUrls.length > 0 && (
        <div>
          <h4>URLs de las imágenes subidas:</h4>
          <ul>
            {imageUrls.map((url, index) => (
              <li key={index}>
                <img src={url} alt={`Imagen ${index}`} width="100" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImgFirebase;
