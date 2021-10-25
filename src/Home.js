import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import RestaurantList from "./RestaurantList";
function Home(){
    const [restaurants, setRestaurants]= useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3500/restaurants")
        .then((r)=> r.json())
        .then((data)=> setRestaurants(data))
    },[])

    return(
        <dvi>
          <RestaurantList restaurants={restaurants}/>
        </dvi>
    )
}
export default Home;