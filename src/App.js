import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import RestaurantDetails from './RestaurantDetails';
import NotFound from './NotFound';
import Jesse from './Jesse'
import Jane from './Jane'
import Filter from './Filter';
import {useState} from 'react'



function App() {
  const [filterType, setFilterType] = useState('')
 
  function handleFilter(type){
    setFilterType(type)}


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Filter handleFilter={handleFilter}/>
            <Home type={filterType} />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/jane">
          <Filter handleFilter={handleFilter}/>
            <Jane type={filterType}/>
          </Route>
          <Route path="/jesse">
          <Filter handleFilter={handleFilter}/>
            <Jesse type={filterType}/>
          </Route>
          <Route path="/restaurants/:id">
            <RestaurantDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
         </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;