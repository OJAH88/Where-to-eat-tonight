import React, { useState } from "react";
// import { Form } from "semantic-ui-react";
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
            
            {restaurants && <RestaurantList restaurants={restaurants.filter((restaurant) => restaurant.picker === 'Jane')} title="Jane's Picks"  handleDelete={handleDelete}  />}
          
            {restaurants && <RestaurantList restaurants={restaurants.filter((restaurant) => restaurant.picker === 'Jesse')} title="Jesse' Picks"  handleDelete={handleDelete}/>}
        </div>
      );
            } 
 
export default Home;