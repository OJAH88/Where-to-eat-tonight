import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
        <h1>Where To Eat!</h1>
        <div className="links">
            <Link to="/">Home</Link> 
            <Link to="/jane">Jane's Pick</Link> 
            <Link to="/jesse">Jesse's Pick</Link> 
            <Link>Add A Restaurant</Link>


        </div>
        </nav>
    );
}
 
export default Navbar;