import { Link } from "react-router-dom";
import React from "react";
import RestaurantDetails from "./RestaurantDetails";


const RestaurantList = ({restaurants, title}) => {

 
  return(
    <div className="restaurant-list">
    <h1>{title}</h1>
    {restaurants.sort(function() { return 0.5 - Math.random() }).map(restaurant => (
      <div className="restaurant-preview" key={restaurant.id} >
         <Link to={`/restaurants/${restaurant.id}`}> 
        <div className="text-barrier">
       
       
        <h2>{ restaurant.name }</h2>
        
        <p>Picked by {restaurant.picker}</p>
       </div>
       </Link>
      </div>
    ))}
  </div>
);
}

export default RestaurantList; 