import imgHome from "../assets/home.avif";

function Home() {
  return (
    <div className="w-full h-full py-1 mt-16">
      <img
        className="w-full h-[30rem] border-b-4 border-red-500"
        src={imgHome}
        alt="home"
      />
      <div className="w-11/12 mx-auto">
        <h1 className="w-4/12 px-4 text-2xl font-bold relative top-[-35px] text-white bg-red-500 rounded-sm">
          Buscador de propiedades
        </h1>
      </div>
      <div className="w-11/12 mx-auto">
        <form className="w-full px-10 flex flex-wrap justify-between items-center">
          <div className="w-2/12 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Operación
            </label>
            <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300">
              <option value="all">Operación</option>
              <option value="A">Alquiler</option>
              <option value="B">Venta</option>
            </select>
          </div>
          <div className="w-2/12 py-2">

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300">
              <option value="all">Tipo</option>
              <option value="C">Casa</option>
              <option value="D">Departamento</option>
            </select>
          </div>
          <div className="w-2/12 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zona
            </label>
            <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300">
              <option value="all">Zona</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="w-2/12 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Barrio
            </label>
            <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300">
              <option value="all">Barrio</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
          </div>
          <div className="w-2/12 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ambientes
            </label>
            <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300">
              <option value="all">Ambientes</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
          </div>
          <div className="w-full">
            <button className="w-full h-[2.5rem] bg-black text-2xl font-bold text-white rounded-sm">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
