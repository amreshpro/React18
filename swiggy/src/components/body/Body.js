import { useState } from "react";
import { mockData } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export default function Body() {
  const [restaurantList, setRestaurantList] = useState(mockData);
  console.log(restaurantList);
  return (
    <div className="body">
      <div className="search filter ">
        <button
        className="btn"
          onClick={() => {
            const filterList = restaurantList.filter((item) => {
              if (parseInt(item?.data?.avgRating) >= 4) return item;
            });
            setRestaurantList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
        className="btn"
          onClick={() => {
            setRestaurantList(mockData);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {restaurantList?.map((data) => {
          return <RestaurantCard key={data?.data?.id} {...data?.data} />;
        })}
      </div>
    </div>
  );
}
