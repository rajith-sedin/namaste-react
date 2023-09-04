import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { formatTime } from "../utils/constants";
import ResCategory from "./ResCategory";

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
  // console.log("menu", menu);
  // console.log("2", menu.data?.cards[2].groupedCard.cardGroupMap.REGULAR);

  const resInfo = menu?.data?.cards[0].card.card.info;
  const items =
    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const categories =
    menu.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-xl my-6">{resInfo?.name}</h1>
      <h1 className="font-bold text-lg">Location: {resInfo?.areaName}</h1>
      <h1 className="text-red-500">
        Next Close Time: {formatTime(resInfo?.availability.nextCloseTime)}
      </h1>
      <h2>Menu Items:</h2>
      {categories.map((c, index) => (
        <ResCategory key={index} data={c?.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
