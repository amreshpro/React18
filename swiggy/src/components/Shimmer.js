
export default function Shimmer() {
  return (<div className="shimmer-container">
{
    Array.from({ length: 15 }, (_, i) => i).map((i) => (
      <ShimmerCard key={i} />
    ))
}
  </div>
  
  );
}




 function ShimmerCard() {
  return (
    <div
      className="res-card"
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "#f0f0f0",
        padding: "5px",
      }}
    >
      <div style={{ width: "100%", height: "150px" }}></div>
      <div
        style={{ backgroundColor: "#f2f2f2", width: "100px", height: "10px" }}
      ></div>
      <div
        style={{ backgroundColor: "#f2f2f2", width: "100px", height: "10px" }}
      ></div>
      <div
        style={{ backgroundColor: "#f2f2f2", width: "100px", height: "10px" }}
      ></div>
    </div>
  );
}
