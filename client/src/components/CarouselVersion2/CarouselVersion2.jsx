import PropTypes from "prop-types";

function CarouselVersion2({
  dataAxiosImages,
  handleImageClick,
  currentImageIndex,
}) {
  return (
    <div className="w-full px-4 md:w-3/4 h-[250px] md:h-[420px] relative overflow-hidden flex flex-col items-center mt-2">
      <div className="w-full h-full">
        {dataAxiosImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-2 flex justify-center items-center space-x-4">
        {dataAxiosImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-3 h-3 rounded-full bg-white border-none m-0 cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentImageIndex ? "p-2 bg-gray-400" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

CarouselVersion2.propTypes = {
  dataAxiosImages: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
};

export default CarouselVersion2;
