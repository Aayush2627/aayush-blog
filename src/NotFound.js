import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>We could not find the page you are looking for....</p>
            <Link to="/">
             Back to Home
            </Link>
        </div>
     );
}
 
export default NotFound;