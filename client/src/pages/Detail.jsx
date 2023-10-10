import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CarouselVersion2 from "../components/CarouselVersion2/CarouselVersion2";
import DetailInfoBot from "../components/DetailInfoBot/DetailInfoBot";
import DetailInfoTop from "../components/DetailInfoTop/DetailInfoTop";
import FormContact from "../components/FormContact/FormContact";
import Spinner from "../components/Spinner/Spinner";
import { getPropertiesId } from "../redux/actions";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dataAxiosImages, setDataAxiosImages] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const property = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getPropertiesId(id))
      .then(() => {
        setDataAxiosImages(property.images);
        setSelectedImage(property.images[0]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error al obtener propiedades:", error);
      });
  }, [id]);

  const handleImageClick = (image) => {
    // Maneja el clic en una imagen pequeña
    setSelectedImage(image);
    setCurrentImageIndex(image);
  };

  return (
    <div className="bg-white dark:bg-black">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-full mt-16 flex flex-col ">
          <DetailInfoTop dataAxios={property} />
          <div className="w-full flex mt-4">
            <div className="w-8/12 h-full pl-16 pr-4">
              <CarouselVersion2
                handleImageClick={handleImageClick}
                currentImageIndex={currentImageIndex}
                dataAxiosImages={dataAxiosImages}
              />
              <div className="w-full text-center my-2 py-2 border shadow-md bg-yellow-400 hover:bg-yellow-500  hover:translate-y-[-2px] transition-all duration-300 ease-in-out rounded-lg text-white font-bold text-xl cursor-pointer ">
                <button>Quiero que me llamen</button>
              </div>
              <DetailInfoBot dataAxios={property} />
            </div>
            <FormContact />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
