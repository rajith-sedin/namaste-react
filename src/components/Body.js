import React from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const data = useFetchData();

  if (onlineStatus === false) return <h1>offline</h1>;
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-wrap justify-center rounded-2xl">
        {data.slice(3).map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.card.card.info.id} key={index}>
            <ResCard info={restaurant.card.card.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
