import { useEffect, useState } from "react";
import Logo from "../../assets/logo-removebg-preview.png";

function FormContact() {
  const [disabled, setDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  useEffect(() => {
    if (
      inputForm.name &&
      inputForm.email &&
      inputForm.phone &&
      inputForm.message
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputForm]);

  return (
    <div className="w-3/12 h-[31.4rem] mt-2 bg-white shadow-md">
      <div className="p-4">
        <h2 className="">Contacta al vendedor</h2>
        <div className="w-full flex gap-4">
          <img src={Logo} alt="logo" className="w-[80px] " />
          <div>
            <h2 className="text-lg "> Av. Siempre viva 1234</h2>
            <h2 className="text-lg ">4422-4433</h2>
            <h2 className="text-lg ">test@test.com</h2>
          </div>
        </div>
        <form className="pt-2">
          <input
            type="text"
            name="name"
            value={inputForm.name}
            onChange={handlerChange}
            placeholder="Nombre"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="text"
            name="email"
            value={inputForm.email}
            onChange={handlerChange}
            placeholder="Email"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="text"
            name="phone"
            value={inputForm.phone}
            onChange={handlerChange}
            placeholder="Teléfono"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <textarea
            style={{ resize: "none" }}
            type="text"
            name="message"
            value={inputForm.message}
            onChange={handlerChange}
            placeholder="Vi esta propiedad y me gustaria que me contacten"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            type="submit"
            disabled={disabled}
            className={`w-full mt-4 p-2 rounded-xl shadow-md transition-all duration-300 ease-out ${
              disabled
                ? "bg-gray-400"
                : "bg-yellow-400 text-white font-bold text-lg border hover:scale-105"
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
