import { useSelector } from "react-redux";
import CardPropertiesDashboard from "../CardPropertiesDashboard/CardPropertiesDashboard";

function AllProperties() {
  const properties = useSelector((state) => state.propiedades);

  return (
    <ul className="w-full h-fit">
      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold ">Propiedades</h1>
        <button className="text-xs font-semibold p-2 bg-green-500 rounded-md">Crear propiedad</button>
      </div>
      {properties.map((elem, index) => (
        <CardPropertiesDashboard key={index} elem={elem} />
      ))}
    </ul>
  );
}

export default AllProperties;
