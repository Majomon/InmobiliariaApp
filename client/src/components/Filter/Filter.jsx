import { useState } from "react";
import { useSelector } from "react-redux";

function Filter() {
  const properties = useSelector((state) => state.propiedades);
  const [orderData, setOrderData] = useState({
    operation: "",
    typeProperty: "",
    province: "",
    zone: "",
    bedrooms: "",
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

  return (
    <div className="w-full absolute bottom-0 bg-black opacity-70">
      <form className="w-11/12 mx-auto px-10 flex flex-wrap justify-between items-center">
        <div className="w-2/12 py-2 opacity-100">
          <label className="block text-sm font-medium text-white mb-1 opacity-100">
            Operación
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.operation}
            onChange={(e) =>
              setOrderData({ ...orderData, operation: e.target.value })
            }
          >
            <option value="all">Operación</option>
            {uniqueOperations.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/12 py-2">
          <label className="block text-sm font-medium text-white mb-1">
            Tipo
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueTypes}
            onChange={(e) =>
              setOrderData({ ...orderData, operation: e.target.value })
            }
          >
            <option value="all">Operación</option>
            {uniqueTypes.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/12 py-2">
          <label className="block text-sm font-medium text-white mb-1">
            Zona
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueProvinces}
            onChange={(e) =>
              setOrderData({ ...orderData, operation: e.target.value })
            }
          >
            <option value="all">Operación</option>
            {uniqueProvinces.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/12 py-2">
          <label className="block text-sm font-medium text-white mb-1">
            Barrio
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueZones}
            onChange={(e) =>
              setOrderData({ ...orderData, operation: e.target.value })
            }
          >
            <option value="all">Barrio</option>
            {uniqueZones.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/12 py-2">
          <label className="block text-sm font-medium text-white mb-1">
            Ambientes
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 opacity-100"
            value={orderData.uniqueBedrooms}
            onChange={(e) =>
              setOrderData({ ...orderData, operation: e.target.value })
            }
          >
            <option value="all">Ambientes</option>
            {uniqueBedrooms.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <button className="w-full h-[2.5rem] bg-black text-2xl font-bold text-white rounded-sm">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
