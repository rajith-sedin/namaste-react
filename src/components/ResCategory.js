import React, { useState } from "react";
import ItemsList from "./ItemsList";

const ResCategory = (data) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-6/12 mx-auto my-4">
      <div className="bg-gray-50 shadow-lg p-4 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <span className="font-bold">
            {data.data.title} ({data.data.itemCards.length})
          </span>
          <span
            className={`transform ${
              isOpen ? "rotate-0" : "-rotate-90"
            } transition-transform duration-300 text-xl`}
          >
            ⬇️
          </span>
        </div>
        <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
          <ItemsList items={data.data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
