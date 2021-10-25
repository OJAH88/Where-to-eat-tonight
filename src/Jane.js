import React, { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import RestaurantList from "./RestaurantList"


function Jane () {
    const { error, isLoading, data: restaurants } = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
     
    }
   
    return (
        <div className="home">
            
            
            
          
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            
            
            {restaurants && <RestaurantList restaurants={restaurants.filter((restaurant) => restaurant.picker === 'Jane')} title="Jane's Picks"  handleDelete={handleDelete}  />}
          
           
        </div>
      );
            } 
 

export default Jane