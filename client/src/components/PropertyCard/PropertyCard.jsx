function PropertyCard(property) {
  const {
    address,
    _id,
    name,
    description,
    images,
    price,
    bedrooms,
    bathrooms,
    area,
    availability,
    category,
  } = property.property;
  return <div>{name}</div>;
}

export default PropertyCard;
