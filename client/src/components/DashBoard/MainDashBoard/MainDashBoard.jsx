import React, { useState } from "react";
import MenuLatelDashBoard from "../MenuLatelDashBoard/MenuLatelDashBoard";

function MainDashBoard() {
  const [activeComponent, setActiveComponent] = useState("profileChange");
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="w-full h-full">
      <MenuLatelDashBoard
        activeComponent={activeComponent}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default MainDashBoard;
