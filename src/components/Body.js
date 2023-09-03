import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { RES_NAMES } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(RES_NAMES);
  const [rated, setRated] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const onlineStatus = useOnlineStatus();

  const handleFilterChange = () => {
    if (rated) {
      setFilteredRestaurants(RES_NAMES);
    } else {
      const filterData = RES_NAMES[0]?.data?.cards.filter(
        (restaurant) => restaurant.card.rating > 4
      );
      setFilteredRestaurants([{ data: { cards: filterData } }]);
    }
    setRated(!rated);
  };

  const handleSearch = () => {
    const filteredRes = RES_NAMES.map((resData) => {
      const filteredCards = resData.data.cards.filter((card) =>
        card.card.name.toLowerCase().includes(searchTxt.toLowerCase())
      );
      return { data: { cards: filteredCards } };
    });

    setFilteredRestaurants(filteredRes);
  };

  if (onlineStatus === false) return <h1>offline</h1>;
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-3">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="px-3 bg-green-400 ml-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-3 flex items-center">
          <button
            className="pl-1 bg-gray-400 ml-2 rounded-lg"
            onClick={handleFilterChange}
          >
            {rated ? "Show All Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center rounded-2xl">
        {filteredRestaurants[0]?.data?.cards.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.card.id} key={index}>
            <ResCard key={index} resData={restaurant.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
