import React, { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import RestaurantList from "./RestaurantList"


function Jane ({type}) {
    const { error, isLoading, data: restaurants } = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
     
    }
   
    return (
        <div className="home">
            
      
          
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            {restaurants && <RestaurantList restaurants={type==="" ? restaurants.filter((restaurant) => restaurant.picker === 'Jane'): restaurants.filter((restaurant) => restaurant.picker === 'Jane').filter((restaurant)=> restaurant.type === type)} title="Jane's Picks"  handleDelete={handleDelete}  />}
          
           
        </div>
      );
            } 
 

export default Jane