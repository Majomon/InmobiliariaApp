import { Carousel } from "flowbite-react";
import React from "react";

function CarouselModal({ images, closeModal, newArrayImg }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bottom-0 right-0  z-40 bg-black/90 flex justify-center items-center">
      <div className=" absolute z-50 top-6 right-6">
        <h2
          className="text-gray-100 bg-gray-800 p-4 rounded-md hover:bg-gray-700 cursor-pointer"
          onClick={() => closeModal()}
        >
          CERRAR
        </h2>
      </div>
      <Carousel>
        {newArrayImg.length > 0
          ? newArrayImg.map((image, index) => (
              <img key={index} src={image} alt={image} className="w-4/12" />
            ))
          : images.map((image, index) => (
              <img key={index} src={image} alt={image} className="w-4/12" />
            ))}
      </Carousel>
    </div>
  );
}

export default CarouselModal;
