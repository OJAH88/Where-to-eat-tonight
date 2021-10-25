import { Link } from 'react-router-dom';


const RestaurantList = ({restaurants, title}) => {
import { Link } from "react-router-dom";
import React from "react";
import RestaurantDetails from "./RestaurantDetails";


const RestaurantList = ({restaurants}) => {

 
    return(
        <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <div className="restaurant-preview" key={restaurant.id} >
        <h2>TEST TITLE</h2>
          <div className="restaurant-preview" key={restaurant.id} restaurant={restaurant}>
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