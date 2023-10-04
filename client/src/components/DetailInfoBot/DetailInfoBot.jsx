function DetailInfoBot({ dataAxios }) {
  return (
    <div className="w-full px-16 mx-auto h-full my-4">
      <div className="shadow-md border rounded-lg my-4">
        <h2 className="px-4 py-2 font-bold text-base">Descripción</h2>
        <div className="px-10 py-2">
          {/* <p>{dataAxios.description}</p> */}
          <p className="">
            lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem
            loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
            loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
            loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
            loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
            loremlorem lorem
          </p>
        </div>
      </div>
      <div className="w-full h-full flex justify-between items-center">
        {/* Detalles de la propiedad */}
        <div className="w-6/12 shadow-md border rounded-lg my-4 mr-4">
          <h2 className="px-4 py-2 font-bold text-base">
            Detalles de la propiedad
          </h2>
          <div className="px-10 py-2">
            <div>
              <h3>Operación</h3>
              <p>{dataAxios.operation}</p>
            </div>
            <div>
              <h3>Propiedad</h3>
              <p>{dataAxios.property}</p>
            </div>
            <div>
              <h3>Operación</h3>
              <p>{dataAxios.address.province}</p>
            </div>
            <div>
              <h3>Operación</h3>
              <p>{dataAxios.address.zone}</p>
            </div>
            <div>
              <h3>Operación</h3>
              <p>{dataAxios.address.street}</p>
            </div>
          </div>
        </div>
        {/* Caracteristicas */}
        <div className="w-6/12 shadow-md border rounded-lg my-4 ml-4">
          <h2 className="px-4 py-2 font-bold text-base">Caracteristicas</h2>
        </div>
      </div>
    </div>
  );
}

export default DetailInfoBot;
