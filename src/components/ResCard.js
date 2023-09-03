import React from "react";
import { IMG_URL } from "../utils/constants";

const ResCard = ({ info }) => {
  const { name, costForTwo, cuisines, locality, cloudinaryImageId, id } = info;
  return (
    <div className="rounded-3xl m-4 w-72">
      <div className=" rounded-xl justify-center items-center border border-solid border-black bg-slate-200">
        <img
          className="rounded-3xl w-40  h-40 pl-[60px]"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
          <p className="text-gray-600">Location: {locality}</p>
          <p className="text-gray-600">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
