import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Where To Eat!</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/jane" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Jane's Picks</Link>
                  <Link to="/jesse" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Jesse's Picks</Link>
               
            </div>
            </nav>
    );
}
 
export default Navbar;