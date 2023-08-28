import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9436747&lng=80.2411929&collection=83649&isNewCollectionFlow=true&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json = await data.json()
        console.log("dataaaaa",json.data.cards[3].card)
        //setFilteredRestaurants(json)
    }

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
