
const baseUrl ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";

export default function RestaurantCard({
  name,
  cuisines,
 
  sla,
  avgRating,
  cloudinaryImageId,
}) {
  return (
    <div
      className="res-card"
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "#eee",
        padding: "5px",
      }}
    >
      <img
        style={{ width: "100%", height: "150px" }}
        src={`${baseUrl}/${cloudinaryImageId}`}
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
}