import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from "./Home"
import Jane from "./Jane"
import Jesse from "./Jesse"
import RestaurantDetails from "./RestaurantDetails"
import RestaurantList from "./RestaurantList"
import Navbar from './NavBar';
import {useState, useEffect} from 'react'


function App() {
  const [restaurants, setRestaurants]= useState([])
  useEffect(()=>{
    fetch("http://localhost:3500/restaurants")
    .then((r)=> r.json())
    .then((data)=> setRestaurants(data))
},[])
  const onerestaurant = restaurants.map((restaurant)=>{
    return <RestaurantDetails key={restaurant.id} restaurant={restaurant}/>
  })

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jane">
            <Jane />
          </Route>
          <Route path="/jesse">
            <Jesse />
          </Route>
          <Route path="/restaurants/:id">
            {onerestaurant}
          </Route>
          
         </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
