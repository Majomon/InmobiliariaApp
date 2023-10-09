import { useSelector } from "react-redux";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty() {
  const properties = useSelector((state) => state.propiedades);

  return (
    <div>
      <div className="w-full mx-auto">
        <h2 className="text-center py-4">Propiedades destacadas</h2>

        <div className="flex flex-wrap justify-center">
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
