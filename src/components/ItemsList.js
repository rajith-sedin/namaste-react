import React from "react";
import { ITEM_URL, DEFAULT_ITEM_IMG } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log("kkkk", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center"
        >
          <div>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </div>
          <div className="relative">
            <button className="h-10 w-10 ml-2  bg-black text-white rounded-lg absolute top-0 left-20">
              +Add
            </button>
            <img
              className="ml-2"
              src={
                item.card.info.imageId
                  ? ITEM_URL + item.card.info.imageId
                  : DEFAULT_ITEM_IMG
              }
              alt="Dish"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
