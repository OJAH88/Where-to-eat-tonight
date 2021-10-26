import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Where To Eat!</h1>
            <div className="links">
                <Link to="/">Home</Link> 
<<<<<<< HEAD
                <Link to="/create">Add Restaurants</Link>
                <Link to="/jane" style={{
=======
                <Link to="/jane">Jane's Picks</Link>
                  <Link to="/jesse">Jesse's Picks</Link>
                 <Link to="/create" style={{
>>>>>>> 12a6b3a574cd785f3d478027cb1bd7222c97b4b1
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Add A Restaurant</Link>

               
            </div>
            </nav>
    );
}
 
export default Navbar;