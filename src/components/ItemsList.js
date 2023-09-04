import React from "react";

const ItemsList = ({ items }) => {
  console.log("kkkk", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div>
            {item.card.info.name} - {item.card.info.price || item.card.info}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
