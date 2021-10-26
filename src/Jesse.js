import React, { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import RestaurantList from "./RestaurantList"

function Jesse ({type}) {
    const { error, isLoading, data: restaurants } = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
     
    }
    return (
        <div className="home">
            

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            
            
            {restaurants && <RestaurantList restaurants={type==="" ? restaurants.filter((restaurant) => restaurant.picker === 'Jesse'): restaurants.filter((restaurant) => restaurant.picker === 'Jesse').filter((restaurant)=> restaurant.type === type)} title="Jesse's Picks"  handleDelete={handleDelete}  />}
          
           
        </div>
      );
    }

export default Jesse