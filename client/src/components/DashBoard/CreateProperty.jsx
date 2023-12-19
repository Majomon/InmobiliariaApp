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
    <div className="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/80">
      <form
        onSubmit={handleSubmit}
        className="w-3/4 fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col p-10 mx-auto my-10 bg-slate-600 rounded"
      >
        <h2>Crear Propiedad</h2>
        <div className="w-full h-full grid grid-cols-5 gap-x-2 justify-center">
          {propertiesOptions.map((option) => (
            <div key={option.id} className="my-1 ">
              {option.component === "services" ? (
                // Usa paréntesis en lugar de corchetes aquí
                option.moreOptions.map((subOption) => (
                  <div key={subOption.name} className="ml-4">
                    <p>{option.name}</p>
                    <div>
                      <label htmlFor={subOption.component}>
                        {subOption.name}
                      </label>
                      <input
                        type="checkbox"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))
              ) : option.component === "address" ? (
                <div key={option.id}>
                  <p>{option.name}</p>
                  {option.moreOptions.map((subOption) => (
                    <div key={subOption.id} className="ml-4">
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
              ) : (
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

        <button type="submit">Crear Propiedad</button>
      </form>
    </div>
  );
}

export default CreateProperty;
