import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  console.log(filterList);

  // fetch after rendering UI
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchHandler = () => {
    const searchedList = filterList.filter((item) => {
      if (item?.info?.name.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    });
    console.log(searchedList);
    setFilterList(searchedList);
  };


if(!isOnline){return <h1>Please Check your Internet Connection.</h1>}

  return filterList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
        className="py-2 px-3 border-b-4 border-orange-500 focus:border-none"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search your food"
        />
        <button class="bg-blue-500 px-4 py-1 rounded-lg mx-2" onClick={() => searchHandler()}>Search</button>
      </div>
      <div className=" filter ">
        <button
          className="btn"
          onClick={() => {
         
            setFilterList(restaurantList);
          }}
        >
          All
        </button>
        <button
          className="btn"
          onClick={() => {
            const topRatedList = restaurantList.filter((item) => {
              if (item?.info?.avgRating >= 4.5) return item;
            });
            setFilterList(topRatedList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterList?.map((data) => {
          return <RestaurantCard key={data?.info?.id} {...data?.info} />;
        })}
      </div>
    </div>
  );
}
