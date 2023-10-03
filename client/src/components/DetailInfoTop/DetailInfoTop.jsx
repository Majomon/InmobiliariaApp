import PropTypes from "prop-types";
import { HiArrowNarrowRight } from "react-icons/hi";
import Superficie from "../../assets/superficie.svg";
import Ambientes from "../../assets/ambientes.svg";
import Baño from "../../assets/bano.svg";

function DetailInfoTop({ dataAxios }) {
  return (
    <div className="w-full h-full bg-gray-100">
      {/* Info del vendedor o inmobiliaria */}
      <div className="w-full h-[3.5rem] flex justify-end gap-6 px-10">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-home-2"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            //Contorno
            stroke="#E9B824"
            //Background
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M10 12h4v4h-4z" />
          </svg>
          <h2 className="text-lg ml-2"> Av. Siempre viva 1234</h2>
        </div>
        <p className="flex justify-center items-center">|</p>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-phone"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#E9B824"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <h2 className="text-lg ml-2">4422-4433</h2>
        </div>
        <p className="flex justify-center items-center">|</p>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#E9B824"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <h2 className="text-lg ml-2">test@test.com</h2>
        </div>
      </div>
      {/* Ubicación */}
      <div className="w-full h-full flex gap-2 mx-auto">
        <div className="flex items-center gap-2 pl-16">
          <h3>{dataAxios.operation}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.province}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.zone}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.street}</h3>
        </div>
      </div>
      {/* Info extra del la publicacion */}
      <div className="w-full h-full mx-auto flex justify-center items-center bg-white shadow-md">
        <div className="w-7/12 h-[7rem] flex pl-16 py-4">
          <div className="w-6/12 h-full">
            <h3>{dataAxios.name}</h3>
            <h4>
              {dataAxios.address.province}, {dataAxios.address.zone}
            </h4>
            <p>
              {dataAxios.address.street}, {dataAxios.address.postalCode}
            </p>
          </div>
          <div className="w-6/12 h-full">
            {dataAxios.operation === "Alquiler" ? (
              <div>
                <p>PRECIO ALQUILER</p>
                <h3>${dataAxios.price}</h3>
                <p>Por mes</p>
              </div>
            ) : (
              <div>
                <p>PRECIO VENTA</p>
                <h3>${dataAxios.price}</h3>
              </div>
            )}
          </div>
        </div>
        <div className="h-[5rem] border-l border-gray-400">

        </div>
        <div className="w-5/12 h-[7rem] flex">
          <div className="w-[25%] flex flex-col justify-center items-center pl-4">
            <img src={Superficie} alt="Superficice" className="w-[25px]" />
            <strong className="text-lg">{dataAxios.area} m²</strong>
            <span className="text-sm">Sup. Total</span>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center">
            <img src={Ambientes} alt="Ambientes" className="w-[25px]" />
            <strong className="text-lg">{dataAxios.environments}</strong>
            <span className="text-sm">Ambientes</span>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center">
            <img src={Baño} alt="Baños" className="w-[25px] text-red-500" />
            <strong className="text-lg">{dataAxios.bathrooms}</strong>
            <span className="text-sm">Baños</span>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailInfoTop.propTypes = {
  dataAxios: PropTypes.object.isRequired,
};

export default DetailInfoTop;
