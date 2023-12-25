import RestaurantCard from "./RestaurantCard";

export default function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="Meghna Food"
          cuisine="Spicy, North Indian, Asian"
          star="4.5"
          time="38 minutes"
        />
        <RestaurantCard
          name="Ramesh Food"
          cuisine="Burger, Fast Food"
          star="4.7"
          time="49 minutes"
        />
        <RestaurantCard
          name="Meghna Food"
          cuisine="Spicy, North Indian, Asian"
          star="4.5"
          time="38 minutes"
        />
        <RestaurantCard
          name="Ramesh Food"
          cuisine="Burger, Fast Food"
          star="4.7"
          time="49 minutes"
        />
        <RestaurantCard
          name="Meghna Food"
          cuisine="Spicy, North Indian, Asian"
          star="4.5"
          time="38 minutes"
        />
        <RestaurantCard
          name="Ramesh Food"
          cuisine="Burger, Fast Food"
          star="4.7"
          time="49 minutes"
        />
        <RestaurantCard
          name="Meghna Food"
          cuisine="Spicy, North Indian, Asian"
          star="4.5"
          time="38 minutes"
        />
        <RestaurantCard
          name="Ramesh Food"
          cuisine="Burger, Fast Food"
          star="4.7"
          time="49 minutes"
        />
      </div>
    </div>
  );
}