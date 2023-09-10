import React from "react";
import {
  ITEM_URL,
  DEFAULT_ITEM_IMG,
  VEG_IMG,
  NONVEG_IMG,
} from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center space-x-4 justify-between p-3 m-3"
        >
          <div>
            <div>
              <img
                src={
                  item.card.info.itemAttribute.vegClassifier === "VEG"
                    ? VEG_IMG
                    : NONVEG_IMG
                }
                className="w-5 h-5"
              />
            </div>
            <h5 className="font-semibold text-left">
              {item.card.info.name} - Rs {item.card.info.price / 100}
            </h5>
            <div className="text-xs text-left">
              <p>{item.card.info.description}</p>
            </div>
          </div>

          <div className="relative w-20 h-20">
            <img
              className="w-full h-full object-cover rounded-md"
              src={
                item.card.info.imageId
                  ? ITEM_URL + item.card.info.imageId
                  : DEFAULT_ITEM_IMG
              }
              alt="Dish"
            />
            <button className="absolute top-2 right-2 bg-black text-white rounded-full h-8 w-8 flex items-center justify-center">
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
