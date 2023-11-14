import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarouselMlWebModal from "./CarouselModal";

function CarouselMlWeb() {
  const property = useSelector((state) => state.details);
  const [firstImage, setFirstImage] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayImg, setArrayImg] = useState([]);

  useEffect(() => {
    if (property.images && property.images.length > 0) {
      setFirstImage(property.images[0]);

      property.images.forEach((image) => {
        setArrayImg((prevArrayImg) => [...prevArrayImg, image]);
      });
    }
  }, [property.images]);

  const handlerSelectImg = (image) => {
    setImgSelected(image);
  };

  const handlerImgModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-2/12 h-full flex flex-col justify-center items-center gap-4 pt-4">
        {property.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[45px] h-[45px] rounded-lg cursor-pointer hover:shadow-md hover:shadow-gray-600"
            onClick={() => handlerSelectImg(image)}
          />
        ))}
      </div>

      <div className="w-10/12 pt-4 pl-4 mx-auto">
        {imgSelected ? (
          <img
            src={imgSelected}
            alt="Descripción de la imagen"
            className="w-9/12 mx-auto h-[450px] rounded-lg "
            onClick={handlerImgModal}
          />
        ) : (
          <img
            src={firstImage}
            alt="Descripción de la imagen"
            className="w-9/12 mx-auto h-[450px] rounded-lg "
            onClick={handlerImgModal}
          />
        )}
      </div>

      {isModalOpen && (
        <CarouselMlWebModal
          images={arrayImg}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default CarouselMlWeb;