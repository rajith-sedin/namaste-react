import React from "react";
import { IMG_URL } from "../utils/constants";

const ResCard = ({ info }) => {
  const {
    name,
    costForTwo,
    cuisines,
    locality,
    cloudinaryImageId,
    id,
    avgRating,
    sla,
    promoted,
  } = info;
  return (
    <div className="rounded-3xl m-4 w-72">
      {promoted ? (
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
      ) : null}
      <div className=" rounded-xl justify-center items-center border border-solid border-black bg-slate-200">
        <img
          className="rounded-3xl w-40  h-40 pl-[60px]"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <h2>
            ⭐ {avgRating} - {sla.deliveryTime} min
          </h2>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
          <p className="text-gray-600">Location: {locality}</p>
          <p className="text-gray-600">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

// export const withPromotedLabel = (ResCard) => {
//   return ({ props }) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <ResCard {...props} />
//       </div>
//     );
//   };
// };

export default ResCard;
