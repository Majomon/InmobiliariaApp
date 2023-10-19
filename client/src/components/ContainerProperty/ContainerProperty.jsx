import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty({ properties }) {
  return (
    <div className="w-full mx-auto dark:bg-black dark:border-white relative">
      <div className="w-full mx-auto grid grid-cols-3">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default ContainerProperty;
