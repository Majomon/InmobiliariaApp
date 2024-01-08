import React, { useState } from "react";
import {
  propertiesAddress,
  propertiesDescription,
  propertiesDetail,
  propertiesImages,
  propertiesOptions,
  propertiesOwner,
  propertiesPrice,
  propertiesServices,
} from "../optionsPostProperty.js";

function ModalEdit({ propertyFound, setActiveEdit }) {
  const [editForm, setEditForm] = useState({ ...propertyFound });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setEditForm({ ...editForm, [name]: checked });
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/90">
      <div className="w-11/12 h-[90%] mx-auto my-10 bg-gray-100 rounded-lg relative">
        <button
          type="button"
          className="absolute right-0 top-0"
          onClick={() => setActiveEdit(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-red-600"
          >
            {/* Ícono de cerrar */}
          </svg>
        </button>
        <form>
          <div className="pt-12 px-10">
            <div className="w-full h-full grid grid-cols-2  gap-x-6">
              {propertiesOptions.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="flex flex-col py-4"
                >
                  <label htmlFor={option.component} className="text-sm">
                    {option.name}
                  </label>
                  {option.options ? (
                    <select
                      id={option.component}
                      name={option.component}
                      value={editForm[option]}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border"
                    >
                      {option.options.map((optionValue, optionIndex) => (
                        <option key={optionIndex} value={optionValue}>
                          {optionValue}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id={option.component}
                      name={option.component}
                      // Usar los valores iniciales
                      value={editForm.name}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
