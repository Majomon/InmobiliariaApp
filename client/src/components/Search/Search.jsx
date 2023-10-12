import { useLocation } from 'react-router-dom';

function Search({ theme }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const operation = queryParams.get('operation');
  const typeProperty = queryParams.get('typeProperty');
  const province = queryParams.get('province');
  const zone = queryParams.get('zone');
  const bedrooms = queryParams.get('bedrooms');

  return (
    <div className="w-full h-[100vh]">
      <h1 className="mt-20">
        Resultados de búsqueda para:
        Operación: {operation}, Propiedad: {typeProperty}, Provincia: {province}, Barrio: {zone}, Ambientes: {bedrooms}
      </h1>
    </div>
  );
}

export default Search;
