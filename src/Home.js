import React, { useState } from "react";
// import { Form } from "semantic-ui-react";
import RestaurantList from "./RestaurantList"
import useFetch from "./useFetch"



const Home = ({type}) => {
    const { error, isLoading, data: restaurants} = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
    }
  
    
    return (
        <div className="home">

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            {restaurants && <RestaurantList restaurants={type==="" ? restaurants :restaurants.filter((restaurant)=> restaurant.type === type)} title="All Restaurants" handleDelete={handleDelete}/> }
          
        </div>
      );
            } 
 
export default Home;