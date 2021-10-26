import { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"



const RestaurantDetails = () => {
    const {id} = useParams()
    const { data: restaurant, error, isLoading } = useFetch('http://localhost:4000/restaurants/' + id)
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:4000/restaurants/' + restaurant.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')

        })
        
    }


    return(
        <div className="restaurant-details">
            { isLoading && <div>Loading...</div>}
            
            { error && <div>{error}</div>}
            
            {restaurant && <article>
                <h1>{restaurant.name}</h1>
             
                <p><h5>Picked By:  {restaurant.picker} </h5></p>

                <img src={restaurant.image} width="50%" height="50%" />

                <p><br /><a href={restaurant.menu}> <button>Click Here For Menu</button></a></p><br />

                <p><h4>Cuisine:  {restaurant.type}  </h4></p> 

                <p><h4>Address:</h4>{restaurant.address.street} <br />{restaurant.address.city},  {restaurant.address.state}  {restaurant.address.zipcode}</p>

                <div><h4>Restaurant Features: </h4>
                {restaurant.services.dinein ? <button>Dine In</button> : null} 
                {restaurant.services.takeout ? <button>Take Out</button> : null}
                {restaurant.services.outdoorseating ? <button>Outdoor Seating</button> : null}
                {restaurant.services.delivery ? <button>Delivery</button> : null}  </div> 
         
                <br></br>
                <div><h3>Description:</h3> {restaurant.description}</div>
                <br></br>
                
               
                <button onClick={() => handleDelete(restaurant.id)}>Delete Restaurant</button>
                </article>}
        </div>
    )
}

export default RestaurantDetails
