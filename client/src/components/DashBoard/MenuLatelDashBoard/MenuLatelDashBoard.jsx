import properties from "../opcionesMenuLateral";

function MenuLatelDashBoard({ handleButtonClick,activeComponent }) {
  return (
    <ul className="w-2/12 border-r-2 flex flex-col pl-10 pt-10 gap-4">
      {properties.map((elem) => (
        <li
          className="cursor-pointer"
          onClick={() => handleButtonClick(elem.component)}
          disabled={activeComponent === elem.component}
        >
          {elem.name}
        </li>
      ))}
    </ul>
  );
}

export default MenuLatelDashBoard;
