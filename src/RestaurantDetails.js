import { Link } from "react-router-dom";
function RestaurantDetails({restaurant}){
    console.log(restaurant)
    return(
        <div>
            <img src={restaurant.image} alt={restaurant.name} width="120x" height="100px"/>
            <p>Name: {restaurant.name}</p>
            <p> Type: {restaurant.type}</p>
            <p> Menu: {restaurant.menu}</p>
            <p> Picker: {restaurant.picker}</p>
        </div>
    )
}
export default RestaurantDetails;