export default function RestaurantCard({name,cuisine,start,time}) {
   
  return (
    <div className="res-card" style={{width:"200px", height:"300px",backgroundColor:"#eee" ,padding:"5px"}} >
     
        <img
        style={{width: '100%', height: '150px'}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt="food"
        />
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{start }</h4>
        <h4>{time} minutes</h4>
      </div>

  );
}