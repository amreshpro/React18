import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../../utils/constant";
import Shimmer from "../Shimmer";

export default function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFound, setIsFound] = useState(true)

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
console.log(searchedList)
searchedList.length==0?setIsFound(false):setIsFound(true);

  searchedList.length>0 &&  setFilterList(searchedList);
  };

  return filterList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search your food"
        />
        <button onClick={() => searchHandler()}>Search</button>
      </div>
      <div className=" filter ">
        <button
          className="btn"
          onClick={() => {
            const filterList = restaurantList.filter((item) => {
              if (item?.info?.avgRating >= 4.5) return item;
            });
            setFilterList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
     
        <button
          className="btn"
          onClick={() => {
            const filterList = restaurantList.filter((item) => {
              if (item?.info?.sla?.deliveryTime <= 15) return item;
            });
            setFilterList(filterList);
          }}
        >
          Fastest Delivery/15min
        </button>
      </div>
      <div className="res-container">
        
        { filterList?.map((data) => {
          return <RestaurantCard key={data?.info?.id} {...data?.info} />;
        })}
      </div>
    </div>
  );
}
