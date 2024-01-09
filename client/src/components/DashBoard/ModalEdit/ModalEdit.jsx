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
    console.log(name);
    if (type === "checkbox") {
      setEditForm({
        ...editForm,
        services: {
          ...editForm.services,
          [name]: checked,
        },
      });
    } else if (name === "street" || name === "zone" || name === "province") {
      setEditForm({
        ...editForm,
        address: {
          ...editForm.address,
          [name]: value,
        },
      });
    } else if (
      name === "currency" ||
      name === "mount" ||
      name === "additionalExpense"
    ) {
      setEditForm({
        ...editForm,
        precio: {
          ...editForm.precio,
          [name]: value,
        },
      });
    } else if (name === "name" || name === "phone") {
      setEditForm({
        ...editForm,
        owner: {
          ...editForm.owner,
          [name]: value,
        },
      });
    } /* else if (propertiesServices.some((option) => option.component === name)) {
      setEditForm({
        ...editForm,
        services: {
          ...editForm.services,
          [name]: value,
        },
      });
    }  */ else {
      setEditForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="w-full absolute top-0 left-0 bottom-0 right-0 z-10 bg-black">
      <div className="w-11/12 min-h-screen mx-auto my-10 bg-gray-100 rounded-lg relative">
        {/* Ícono de cerrar */}
        <button
          type="button"
          className="absolute right-0 top-0"
          onClick={() => setActiveEdit(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-red-600"
          ></svg>
        </button>
        <form>
          <div className="pt-12 px-10">
            {/* Primeras opciones */}
            <div className="w-full h-full grid grid-cols-4  gap-x-6">
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
                      value={editForm[option.component]}
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
                      value={editForm.name}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border"
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Descripción */}
            {propertiesDescription.map((option, index) => (
              <div
                key={`${option.id}_${index}`}
                className="flex flex-col h-40 py-1"
              >
                <label htmlFor={option.component} className="text-sm">
                  {option.name}
                </label>
                <textarea
                  type="text"
                  id={option.component}
                  name={option.component}
                  value={editForm[option.component]}
                  onChange={handleChange}
                  className="h-64  bg-gray-50 rounded-sm border"
                />
              </div>
            ))}
            {/* Detalles */}
            <div className="grid grid-cols-5 gap-x-6 py-4">
              {propertiesDetail.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="w-full h-full flex flex-col "
                >
                  <label htmlFor={option.component} className="text-sm">
                    {option.name}
                  </label>
                  <input
                    type="number"
                    id={option.component}
                    name={option.component}
                    value={editForm[option.component]}
                    onChange={handleChange}
                    className=" bg-gray-50 rounded-sm border"
                  />
                </div>
              ))}
            </div>
            {/* Dirección */}
            <div className="w-full h-full">
              <p className="text-sm py-4">Dirección</p>
              {propertiesAddress.map((addressOption, addressIndex) => (
                <div
                  key={`${addressOption.id}_${addressIndex}`}
                  className="grid grid-cols-3 gap-x-4"
                >
                  {addressOption.moreOptions.map((subOption, subIndex) => (
                    <div
                      key={`${addressOption.id}_${subIndex}`}
                      className="w-full h-full flex flex-col"
                    >
                      <label htmlFor={subOption.component} className="text-sm">
                        {subOption.name}
                      </label>
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={editForm.address[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Sección de Precio */}
            {propertiesPrice.map((option, index) => (
              <div
                key={`${option.id}_${index}`}
                className="grid grid-cols-2 gap-x-4"
              >
                {option.moreOptions.map((subOption, subIndex) => (
                  <div
                    key={`${option.id}_${subOption.id}_${subIndex}`}
                    className="w-full h-full flex flex-col"
                  >
                    <label htmlFor={subOption.component} className="text-sm">
                      {subOption.name}
                    </label>
                    {subOption.component === "currency" ? (
                      <select
                        id={subOption.component}
                        name={subOption.component}
                        value={editForm.precio[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      >
                        {subOption.options.map(
                          (currencyOption, currencyIndex) => (
                            <option key={currencyIndex} value={currencyOption}>
                              {currencyOption}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={editForm.precio[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
            {/* Precio y dueño */}
            <div className="grid grid-cols-2 gap-x-6 py-4">
              {/* Precio */}
              <div className="w-full h-full">
                <p className="text-sm py-4">Precio</p>
                {propertiesPrice.map((option, index) => (
                  <div
                    key={`${option.id}_${index}`}
                    className="grid grid-cols-2 gap-x-4"
                  >
                    {option.moreOptions.map((subOption, subIndex) => (
                      <div
                        key={`${option.id}_${subOption.id}_${subIndex}`}
                        className="w-full h-full flex flex-col "
                      >
                        <label
                          htmlFor={subOption.component}
                          className="text-sm"
                        >
                          {subOption.name}
                        </label>
                        {subOption.component === "currency" ? (
                          <select
                            id={subOption.component}
                            name={subOption.component}
                            value={editForm.precio[subOption.component]}
                            onChange={handleChange}
                            className="bg-gray-50 rounded-sm border"
                          >
                            {subOption.options.map(
                              (currencyOption, currencyIndex) => (
                                <option
                                  key={currencyIndex}
                                  value={currencyOption}
                                >
                                  {currencyOption}
                                </option>
                              )
                            )}
                          </select>
                        ) : (
                          <input
                            type="text"
                            id={subOption.component}
                            name={subOption.component}
                            value={editForm.precio[subOption.component]}
                            onChange={handleChange}
                            className="bg-gray-50 rounded-sm border"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Dueño */}
              <div className="w-full h-full">
                <p className="text-sm py-4">Dueño</p>
                {propertiesOwner.map((option, index) => (
                  <div
                    key={`${option.id}_${index}`}
                    className="grid grid-cols-2 gap-x-4"
                  >
                    {option.moreOptions.map((subOption, index) => (
                      <div
                        key={`${option.id}_${index}`}
                        className="w-full h-full flex flex-col "
                      >
                        <label
                          htmlFor={subOption.component}
                          className="text-sm"
                        >
                          {subOption.name}
                        </label>
                        <input
                          type="text"
                          id={subOption.component}
                          name={subOption.component}
                          value={editForm.owner[subOption.component]} // Accede a la estructura correcta del objeto owner
                          onChange={handleChange}
                          className=" bg-gray-50 rounded-sm border"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Servicios */}
            <div className="w-full h-full">
              <p className="text-sm py-4">Servicios</p>
              {propertiesServices.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="grid grid-cols-3 gap-x-20"
                >
                  {option.moreOptions.map((subOption, index) => (
                    <div
                      key={`${option.id}_${index}`}
                      className="w-full h-full flex justify-between py-2"
                    >
                      <label htmlFor={subOption.component} className="text-sm">
                        {subOption.name}
                      </label>
                      <input
                        type="checkbox"
                        id={subOption.component}
                        name={subOption.component}
                        checked={editForm.services[subOption.component]}
                        onChange={handleChange}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Imagenes */}
            <div className="grid grid-cols-8 gap-x-2">
              {editForm.images.map((image, index) => (
                <div key={`${index}`} className="relative">
                  <img className="" src={image} alt={`Image ${index}`} />
                  <button
                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded"
                    onClick={() => {
                      const updatedImages = [...editForm.images];
                      updatedImages.splice(index, 1);
                      setEditForm({
                        ...editForm,
                        images: updatedImages,
                      });
                    }}
                  >
                    X
                  </button>
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
