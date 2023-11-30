import { useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "sonner";
import { loginUser } from "../redux/actions";

function Admin() {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputForm.email,
      password: inputForm.pass,
    };
    dispatch(loginUser(data));
    setInputForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-950 flex justify-center items-center">
      <Toaster />
      <form
        className="w-2/12 h-full p-10 bg-gray-500 rounded-lg flex flex-col gap-6"
        onSubmit={handlerSubmit}
      >
        <h1 className="pb-4">Login</h1>
        <div className="w-full h-full flex flex-col gap-4">
          <input
            type="text"
            name="email"
            value={inputForm.email}
            onChange={handlerChange}
            placeholder="Email"
            className="my-0 rounded-sm border-gray-800 border-2 "
          />
          <input
            type="text"
            name="password"
            value={inputForm.password}
            onChange={handlerChange}
            placeholder="Contraseña"
            className="my-0"
          />
        </div>
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default Admin;
