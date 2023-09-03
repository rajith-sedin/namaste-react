import React from "react";

const ResCard = ({ resData }) => {
  const { img, name, cusine, rating, deliveryTime } = resData;

  return (
    <div className="rounded-xl flex flex-col items-center m-4 p-4 w-[250px] border border-solid border-black bg-slate-200">
      <div className="flex flex-col items-center">
        <img
          className="rounded-lg h-[200px] w-[200px]"
          src={img}
          alt="Restaurant Logo"
        />
        <div className="text-center">
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          {Array.isArray(cusine) ? (
            <p className="res-cuisine">{cusine.join(", ")}</p>
          ) : (
            <p className="res-cuisine">{cusine}</p>
          )}
          <p className="res-rating">{rating}</p>
          <p className="res-delivery">{deliveryTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
