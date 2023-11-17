import PropertyCard from "../PropertyCard/PropertyCard";

function PropertyArea({ sliderProperty }) {
  return (
    <div>
      {sliderProperty?.map((elem) => (
        <PropertyCard key={elem._id} property={elem} />
      ))}
    </div>
  );
}

export default PropertyArea;
