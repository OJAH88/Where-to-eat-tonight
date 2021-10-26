import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Where To Eat Tonight!</h1>
            <div className="links">
                <Link to="/"><button>Home</button></Link> 
                <Link to="/create"><button>Add A Restaurant</button></Link>
                <Link to="/jane"><button>Jane's Picks</button></Link>
                <Link to="/jesse"><button>Jesse's Picks</button></Link>
               
            </div>
            </nav>
    );
}
 
export default Navbar;