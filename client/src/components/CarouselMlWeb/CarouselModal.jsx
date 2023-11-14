import React from "react";
import { Carousel } from "flowbite-react";

function CarouselModal({ images, closeModal }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bottom-0 right-0  z-40 bg-black/90 flex justify-center items-center">
      <div className=" absolute z-50 top-6 right-6">
        <h2
          className="text-gray-100 bg-gray-800 p-4 rounded-md hover:bg-gray-700"
          onClick={() => closeModal()}
        >
          CERRAR
        </h2>
      </div>
      <Carousel>
        {images.map((image) => (
          <img src={image} alt={image} className="w-4/12" />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselModal;
