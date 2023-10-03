import PropTypes from "prop-types";
import { HiArrowNarrowRight } from "react-icons/hi";
import Superficie from "../../assets/superficie.png";

function DetailInfoTop({ dataAxios }) {
  return (
    <div className="w-full h-full">
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
      <div className="w-full h-full flex gap-2 mx-auto my-2 px-10">
        <div className="flex items-center gap-2">
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
      <div className="w-full h-full mx-auto flex">
        <div className="w-8/12 h-[7rem] px-10 py-2 flex items-center bg-red-400">
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
        <div className="flex flex-col w-4/12 h-full bg-yellow-500">
          <div>
            <img
              src={Superficie}
              alt="Superficice"
              className="w-[60px] h-[60px]"
            />
            <strong>{dataAxios.area}</strong>
            <span>Sup. Total</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bed-filled"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 6a1 1 0 0 1 .993 .883l.007 .117v6h6v-5a1 1 0 0 1 .883 -.993l.117 -.007h8a3 3 0 0 1 2.995 2.824l.005 .176v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-3h-16v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-11a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M7 8a2 2 0 1 1 -1.995 2.15l-.005 -.15l.005 -.15a2 2 0 0 1 1.995 -1.85z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
            <strong>{dataAxios.environments}</strong>
            <span>Ambientes</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bath-filled"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M11 2a1 1 0 0 1 .993 .883l.007 .117v2.25a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.25h-2a1 1 0 0 0 -.993 .883l-.007 .117v6h13a2 2 0 0 1 1.995 1.85l.005 .15v3c0 1.475 -.638 2.8 -1.654 3.715l.486 .73a1 1 0 0 1 -1.594 1.203l-.07 -.093l-.55 -.823a4.98 4.98 0 0 1 -1.337 .26l-.281 .008h-10a4.994 4.994 0 0 1 -1.619 -.268l-.549 .823a1 1 0 0 1 -1.723 -1.009l.059 -.1l.486 -.73a4.987 4.987 0 0 1 -1.647 -3.457l-.007 -.259v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h1v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h3z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
            <strong>{dataAxios.bathrooms}</strong>
            <span>Baños</span>
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
