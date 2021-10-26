import React, { useState } from "react";
import RestaurantList from "./RestaurantList"
import useFetch from "./useFetch"



const Home = () => {
    const { error, isLoading, data: restaurants } = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
     
    }

    return (
        <div className="home">

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            {restaurants && <RestaurantList restaurants={restaurants} title="All Restaurants" handleDelete={handleDelete}/>}
            
          
        </div>
      );
            } 
 
export default Home;