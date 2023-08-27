import React, { useState } from "react";
import ResCard from "./ResCard";
import { RES_NAMES } from "../utils/constants";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(RES_NAMES);
    const [rated,setRated] = useState(false)

    const handleFilterChange = () => {
        if (rated) {
            setFilteredRestaurants(RES_NAMES);
        } else {
            const filterData = RES_NAMES.filter(restaurant => restaurant.rating > 4);
            setFilteredRestaurants(filterData);
        }
        setRated(!rated);
    };

    return (
        <div>
            <button className="filter-button" onClick={handleFilterChange}>{rated?"Show All Res":"Top Rated Res"}</button>
            <div className="res-cards-container">
                {filteredRestaurants.map((restaurant, index) => (
                    <ResCard
                        key={index}
                        resName={restaurant.resName}
                        cusine={restaurant.cusine}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                        img={restaurant.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Body;
