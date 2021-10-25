import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import RestaurantDetails from './RestaurantDetails';
import NotFound from './NotFound';
import Jesse from './Jesse'
import Jane from './Jane'


function App() {


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/jane">
            <Jane />
          </Route>
          <Route path="/jesse">
            <Jesse />
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
