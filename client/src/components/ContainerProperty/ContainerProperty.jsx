import { useSelector } from "react-redux";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty() {
  const properties = useSelector((state) => state.propiedades);

  return (
    <div>
      <div className="w-full mx-auto">
        <h2 className="text-center pt-8 font-bold text-4xl">Todas las propiedades</h2>

        <div className="w-11/12 mx-auto grid grid-cols-3">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          ) : (
            <p>No se encontraron datos de propiedades.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContainerProperty;
