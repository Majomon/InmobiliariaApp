import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty({ properties }) {
  return (
    <div className="w-full h-full dark:bg-black dark:border-white relative ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
