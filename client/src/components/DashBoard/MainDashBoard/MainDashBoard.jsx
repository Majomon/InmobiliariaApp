import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "sonner";
import { getAllProperties } from "../../../redux/actions";
import AllProperties from "../AllProperties/AllProperties";
import CreateProperty from "../CreateProperty";
import MenuLateralDashBoard from "../MenuLateralDashBoard/MenuLateralDashBoard";

function MainDashBoard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const [activeComponent, setActiveComponent] = useState("home");
  
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="w-full h-full flex">
    <Toaster></Toaster>
      <MenuLateralDashBoard
        activeComponent={activeComponent}
        handleButtonClick={handleButtonClick}
      />
     <div className="w-9/12 ml-auto px-6 pt-10">
        {activeComponent === "home" && <AllProperties />}
        {activeComponent === "addProperty" && <CreateProperty />}
      </div>
    </div>
  );
}

export default MainDashBoard;
