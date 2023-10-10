import Habitacion from "../../assets/iconos/habitacion.png";
import Baño from "../../assets/iconos/ducha.png";
import Superficie from "../../assets/iconos/superficie.png";
import { Link } from "react-router-dom";

function PropertyCard(properties) {
  const {
    _id,
    address,
    property,
    operation,
    name,
    images,
    price,
    bedrooms,
    bathrooms,
    area,
  } = properties.property;

  return (
    <Link to={`/detail/${_id}`}>
      <div className="w-[380px] mx-auto m-8 rounded-md border shadow-xl hover:shadow-2xl ">
        <h2 className="py-2 text-center font-bold bg-yellow-300">
          {property} en {operation}
        </h2>
        <img src={images[0]} className="w-full h-[280px]" />
        <div className="w-full flex flex-col justify-between items-center py-2 px-4">
          <h2 className="font-bold text-base py-2">{name}</h2>
          <h3 className="py-2">
            {address.street} - {address.zone}
          </h3>

          <h4 className="text-blue-400 py-4">
            <strong>Precio:</strong> ${price}
          </h4>

          <div className="grid grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <img src={Superficie} className="w-6" />
              <p>{area}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Baño} className="w-6" />
              <p>
                {bathrooms} {bathrooms > 1 ? "Baños" : "Baño"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Habitacion} className="w-6" />
              <div>
                <p>
                  {bedrooms} {bedrooms > 1 ? "Habitaciones" : "Habitación"}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
