import { useEffect, useState } from "react";
import imgPrincipal from "../../assets/img/principal.jpg";

function CarouselHome({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-[390px] md:h-[500px] mx-auto relative overflow-hidden">
      <div className="absolute left-0 right-0 top-20 flex justify-center">
        <div className="w-fit p-1 rounded-lg backdrop-filter backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-gray-950  text-center">
            Bienvenido a tu futuro{" "}
            <strong className="border-b-2 border-red-600">Hogar</strong>
          </h1>
          <p className="text-gray-950 text-xl font-semibold text-center my-6">
            Explora las propiedades y encontra la tuya
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={imgPrincipal} alt="imgPrincipal" className="w-full h-full" />
      </div>
    </div>
  );
}

export default CarouselHome;

{
  /*       <div className="w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div> */
}
