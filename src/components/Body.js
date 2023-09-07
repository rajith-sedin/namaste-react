import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  const data = useFetchData();
  const [filterRes, setFilterRes] = useState([]);
  console.log("data", data);
  console.log("filter", filterRes);

  useEffect(() => {
    if (data.length > 0) {
      setFilterRes(data);
    }
  }, [data]);

  // const handleSearch = () => {
  //   console.log("search functionality");
  // };

  // const handleTopRated = () => {
  //   const topRatedRestaurants = data.slice(3).filter((restaurant) => {
  //     const avgRating = restaurant.card.card.info.avgRating;
  //     return avgRating > 4;
  //   });
  //   setFilterRes(topRatedRestaurants);
  // };

  if (onlineStatus === false) return <h1>offline</h1>;
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="flex flex-col justify-center items-center">
        <div className="p-4 m-4">
          <input className="border border-solid" type="text" />
          <button
            className="bg-green-600 text-black p-1 m-1 rounded-xl"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-gray-500 p-1 m-1 rounded-xl absolute top-19 right-0"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div> */}

      <div className="flex flex-wrap justify-center rounded-2xl">
        {filterRes.slice(3).map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.card.card.info.id} key={index}>
            <ResCard info={restaurant.card.card.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
