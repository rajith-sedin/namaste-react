import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { RES_NAMES } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState(RES_NAMES);
    const [rated,setRated] = useState(false)
    const [searchTxt,setSearchTxt] = useState("")
    const onlineStatus = useOnlineStatus();

    // useEffect(()=>{
    //     fetchData()
    // },[])
    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9436747&lng=80.2411929&collection=83649&isNewCollectionFlow=true&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    //     const json = await data.json();
    //     console.log(json.data.cards[4])
    // }

    const handleFilterChange = () => {
        if (rated) {
            setFilteredRestaurants(RES_NAMES);
        } else {
            const filterData = RES_NAMES[0]?.data?.cards.filter(restaurant => restaurant.card.rating > 4);
            setFilteredRestaurants([{ data: { cards: filterData } }]);
        }
        setRated(!rated);
    };


    const handleSearch = () => {
        const filteredRes = RES_NAMES.map((resData) => {
            const filteredCards = resData.data.cards.filter(
                (card) => card.card.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            return { data: { cards: filteredCards } };
        });
    
        setFilteredRestaurants(filteredRes);
    };
    
    if (onlineStatus === false) return (<h1>offline</h1>);
    return (
        filteredRestaurants.length === 0 ? <Shimmer/> :
        <div className="body">
            <div className="search">
                <input type="text" value={searchTxt} onChange={(e) => {setSearchTxt(e.target.value)}}></input>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="filter">
                 <button  onClick={handleFilterChange}>
                     {rated ? "Show All Res" : "Top Rated Res"}
                 </button>
            </div>
            <div className="res-cards-container">
                {filteredRestaurants[0]?.data?.cards.map((restaurant, index) => (
                    <Link to={"/restaurant/"+restaurant.card.id}>
                        <ResCard
                            key={index}
                            resData={restaurant.card}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
