import './Error.css';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <><div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-message">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="go-home-btn">Go Home</Link>
            </div>
        </div></>
    )
}
export default Error;