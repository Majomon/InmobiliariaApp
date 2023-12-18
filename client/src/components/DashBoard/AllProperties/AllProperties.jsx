import { useSelector } from "react-redux";
import CardPropertiesDashboard from "../CardPropertiesDashboard/CardPropertiesDashboard";
import { Switch } from "@headlessui/react";
import { useState } from "react";

function AllProperties() {
  const properties = useSelector((state) => state.propiedades);
  const orderProperties = properties.sort((a, b) => b.id - a.id);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage, setCountPage] = useState(1);

  const pagination = () => {
    return properties.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (orderProperties.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
      setCountPage(countPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
      setCountPage(countPage - 1);
    }
  };
  return (
    <ul className="w-full h-fit">
      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold ">Propiedades</h1>
        <button className="text-xs font-semibold p-2 bg-green-500 rounded-md">
          Crear propiedad
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="h-10 font-bold text-md text-left">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Operación</th>
            <th>Propiedad</th>
            <th>Precio</th>
            <th></th>
            <th className="w-24 pr-2">Habilitado</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {pagination().map((prop, index) => (
            <tr
              className={`h-12 ${
                index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
              }`}
              key={index}
            >
              <td className="flex justify-center">
                <img
                  className="w-11 h-14"
                  src={prop.images[0]}
                  alt={prop.name}
                />
              </td>
              <td>{prop.name}</td>
              <td>{prop.operation}</td>
              <td>{prop.property}</td>
              <td>{prop.price}</td>
              <td>
                <button onClick={() => handleEdit(movie.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 stroke-light-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td>
                {/*                 <Switch
                  className={`relative inline-flex h-5 w-10 items-center rounded-full ${
                    movie.activeMovie ? "bg-green-500" : "bg-red-500"
                  }`}
                  checked={movie.activeMovie}
                  onChange={() => handleToggle(movie.id, movie.activeMovie)}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      movie.activeMovie ? "translate-x-5" : "translate-x-0"
                    }
                            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {properties.length ? (
        <div className="w-full flex justify-center items-center pt-4">
          <button
            onClick={prevPage}
            className="bg-gray-400 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span className="dark:text-black">{countPage}</span>
          <button
            onClick={nextPage}
            className="bg-gray-400 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center pt-4">
          <h2 className="">No hay resultados encontrados</h2>
        </div>
      )}
    </ul>
  );
}

export default AllProperties;
