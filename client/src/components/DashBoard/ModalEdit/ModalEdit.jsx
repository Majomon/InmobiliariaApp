import React, { useState } from "react";

function ModalEdit({ propertyFound, setActiveEdit }) {
  const [editForm, setEditForm] = useState({ ...propertyFound });
  console.log(editForm);
  const handleInputChange = (key, value) => {
    setEditForm({
      ...editForm,
      [key]: value,
    });
  };

  return (
    <div
      className="w-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/90"
      onClick={() => setActiveEdit(false)}
    >
      <div className="w-11/12 h-[90%] mx-auto my-10 bg-gray-100 rounded-lg relative">
        <form>
          {Object.entries(editForm).map(([key, value]) => (
            <div key={key} className="flex flex-col py-4">
              <label className="font-semibold">{key}</label>
              <input type="text" value={value} />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
