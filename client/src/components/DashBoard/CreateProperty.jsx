import { useState } from "react";
import { useDispatch } from "react-redux";
import propertiesOptions from "./optionsPostProprty.js";

function CreateProperty({ setActiveFormCreate }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    operation: "",
    property: "",
    environments: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    garage: 0,
    state: "",
    availability: "",
    name: "",
    description: "",
    country: "",
    province: "",
    zone: "",
    street: "",
    postalCode: "",
    airConditioning: false,
    runningWater: false,
    pavement: false,
    waterHeater: false,
    light: false,
    kitchen: false,
    sewageDrain: false,
    balcony: false,
    laundry: false,
    yard: false,
    dressingRoom: false,
    images: [],
    price: 0,
  });

  const newProperty = {
    operation: formData.operation,
    property: formData.property,
    environments: formData.environments,
    bedrooms: formData.bedrooms,
    area: formData.area,
    garage: formData.garage,
    state: formData.state,
    availability: formData.availability,
    name: formData.name,
    description: formData.description,
    address: {
      country: formData.country,
      province: formData.province,
      zone: formData.zone,
      street: formData.street,
      postalCode: formData.postalCode,
    },
    services: {
      airConditioning: formData.airConditioning,
      runningWater: formData.runningWater,
      pavement: formData.pavement,
      waterHeater: formData.waterHeater,
      light: formData.light,
      kitchen: formData.kitchen,
      sewageDrain: formData.sewageDrain,
      balcony: formData.balcony,
      laundry: formData.laundry,
      yard: formData.yard,
      dressingRoom: formData.dressingRoom,
    },
    images: formData.images,
    price: formData.price,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envío de la información para crear la propiedad mediante la acción correspondiente
    dispatch(createProperty(formData));
    setActiveFormCreate(false); // Cerrar el formulario después de enviar la información
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-gray-950">
      <form
        onSubmit={handleSubmit}
        className="w-3/4 fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col p-10 mx-auto my-10 bg-slate-600 rounded"
      >
        <button
          type="button"
          className="absolute right-0 top-0 m-4"
          onClick={() => setActiveFormCreate(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-red-600 text-xs"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2>Crear Propiedad</h2>
        <div className="w-full h-full grid grid-cols-4 gap-x-2 justify-center items-center">
          {propertiesOptions.map((option) => (
            <div key={option.id} className="flex my-1">
              {option.component !== "services" &&
                option.component !== "address" && (
                  <div className="flex flex-col">
                    <label htmlFor={option.component}>{option.name}</label>
                    <input
                      type="text"
                      id={option.component}
                      name={option.component}
                      value={formData[option.component]}
                      onChange={handleChange}
                    />
                  </div>
                )}
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2">
          {propertiesOptions.map((option) => {
            if (option.component === "address") {
              return (
                <div key={option.id} className="">
                  <p>{option.name}</p>
                  {option.moreOptions.map((subOption) => (
                    <div
                      key={subOption.id}
                      className="w-full flex justify-between px-4 py-1"
                    >
                      <label htmlFor={subOption.component}>
                        {subOption.name}
                      </label>
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
          {propertiesOptions.map((option) => {
            if (option.component === "services") {
              return (
                <div key={option.id}>
                  <p>{option.name}</p>
                  <div className="w-full grid grid-cols-3 gap-1">
                    {option.moreOptions.map((subOption) => (
                      <div
                        key={subOption.name}
                        className="flex justify-between"
                      >
                        <label htmlFor={subOption.component}>
                          {subOption.name}
                        </label>
                        <input
                          type="checkbox"
                          id={subOption.component}
                          name={subOption.component}
                          checked={formData[subOption.component]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-fit text-white py-2 px-10 bg-gray-950 rounded-sm "
          >
            CREAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;
