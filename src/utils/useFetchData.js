import React from "react";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9436747&lng=80.2411929&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const refined = json.data.cards;
    setData(refined);
  };
  return data;
};

export default useFetchData;
