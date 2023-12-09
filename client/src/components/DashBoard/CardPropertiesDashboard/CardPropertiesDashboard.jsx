import React from "react";

function CardPropertiesDashboard({ elem }) {
  return (
    <li className="flex ">
      <img src={elem.images[0]} alt="imagen" className="w-10 h-10 "/>
      <h2>{elem.name}</h2>
      <h3>{elem.description}</h3>
    </li>
  );
}

export default CardPropertiesDashboard;
