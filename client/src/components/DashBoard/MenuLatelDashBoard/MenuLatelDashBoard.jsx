import properties from "../opcionesMenuLateral";
function MenuLatelDashBoard() {
  return (
    <ul className="w-2/12 min-h-screen border-r-2 flex flex-col pl-10 pt-10 gap-4">
      {properties.map((elem) => (
        <li className="cursor-pointer">{elem}</li>
      ))}
    </ul>
  );
}

export default MenuLatelDashBoard;
