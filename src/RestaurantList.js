import { Link } from 'react-router-dom';


const RestaurantList = ({restaurants, title}) => {

 
    return(
        <div className="restaurant-list">
        <h2>{title}</h2>
        {restaurants.map(restaurant => (
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