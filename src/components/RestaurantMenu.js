import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenu(json);
  };

  const info = menu?.data?.cards[0].card.card.info;
  const items =
    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 bg-gray-200 shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-4 text-blue-800">
        {info?.name}
      </h1>
      <h1 className="text-lg mb-2 text-gray-600">
        Location : {info?.areaName}
      </h1>
      <h1 className="text-lg mb-4 text-gray-600">
        Next Close Time: {info?.availability.nextCloseTime}
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">
          Menu Items:
        </h2>
        <ul className="list-disc list-inside">
          {items?.map((item, index) => (
            <li key={index} className="mb-2" style={{ listStyle: "none" }}>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold text-blue-800">
                  Name: {item?.card.info.name}
                </p>
                <p className="text-gray-600">Price: {item?.card.info.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
