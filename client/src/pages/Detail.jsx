import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
//import Carousel from "../components/CarouselVersion1/CarouselVersion1";
import CarouselVersion2 from "../components/CarouselVersion2/CarouselVersion2";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  //const [dataAxios, setDataAxios] = useState(null); // Inicializa como null
  const [dataAxiosImages, setDataAxiosImages] = useState(null); // Inicializa como null
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`/properties/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          //setDataAxios(data);
          setDataAxiosImages(data.images); // Asigna el arreglo de imágenes a dataAxios
          setSelectedImage(data.images[0]);
          setLoading(false);
        } else {
          throw new Error("La solicitud no fue exitosa.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener propiedades:", error);
        setLoading(false);
      });
  }, [id]);

  const handleImageClick = (image) => {
    // Maneja el clic en una imagen pequeña
    setSelectedImage(image);
    setCurrentImageIndex(image)
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {/*           <Carousel
            selectedImage={selectedImage}
            dataAxiosImages={dataAxiosImages}
            handleImageClick={handleImageClick}
          /> */}

          <CarouselVersion2
            handleImageClick={handleImageClick}
            currentImageIndex={currentImageIndex}
            selectedImage={selectedImage}
            dataAxiosImages={dataAxiosImages}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
