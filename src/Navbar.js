import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Where To Eat</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/jane">Jane's Picks</Link>
                  <Link to="/jesse">Jesse's Picks</Link>
                    <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Submit New</Link>
               
            </div>
            </nav>
    );
}
 
export default Navbar;