import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FilterSearch() {
  const navigate = useNavigate();
  const properties = useSelector((state) => state.propiedades);
  const [orderData, setOrderData] = useState({
    operation: "all",
    typeProperty: "all",
    province: "all",
    zone: "all",
    bedrooms: "all",
  });

  const uniqueOperations = [
    ...new Set(properties.map((prop) => prop.operation)),
  ];
  const uniqueTypes = [...new Set(properties.map((prop) => prop.property))];
  const uniqueProvinces = [
    ...new Set(properties.map((prop) => prop.address.province)),
  ];
  const uniqueZones = [...new Set(properties.map((prop) => prop.address.zone))];
  const uniqueBedrooms = [...new Set(properties.map((prop) => prop.bedrooms))];

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (orderData.operation !== "all") {
      queryParams.append("operation", orderData.operation);
    }
    if (orderData.typeProperty !== "all") {
      queryParams.append("typeProperty", orderData.typeProperty);
    }
    if (orderData.province !== "all") {
      queryParams.append("province", orderData.province);
    }
    if (orderData.zone !== "all") {
      queryParams.append("zone", orderData.zone);
    }
    if (orderData.bedrooms !== "all") {
      queryParams.append("bedrooms", orderData.bedrooms);
    }
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="w-[350px] h-[25rem] mr-10 flex justify-center items-center my-8 border border-gray-300 rounded-md sticky top-[100px]">
      <form className="w-full mx-4">
        <div className="w-full py-2">
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.operation}
            onChange={handlerChange}
            name="operation"
          >
            <option value="all">Operación</option>
            {uniqueOperations.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full py-2">
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueTypes}
            onChange={handlerChange}
            name="typeProperty"
          >
            <option value="all">Propiedad</option>
            {uniqueTypes.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full py-2">
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueProvinces}
            onChange={handlerChange}
            name="province"
          >
            <option value="all">Provincia</option>
            {uniqueProvinces.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full py-2">
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueZones}
            onChange={handlerChange}
            name="zone"
          >
            <option value="all">Barrio</option>
            {uniqueZones.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full py-2">
          <select
            className="block w-full py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueBedrooms}
            onChange={handlerChange}
            name="bedrooms"
          >
            <option value="all">Ambientes</option>
            {uniqueBedrooms.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full py-2">
          <button
            onClick={handlerSubmit}
            className="w-full py-2 bg-red-800 hover:bg-red-600 hover:text-black hover:duration-1000 text-white rounded-md hover:font-bold"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterSearch;
