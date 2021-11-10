import React from "react";
import './NotFound.css';
import notFound from '../../images/404.jpg';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="d-flex flex-column">
            <img src={notFound} alt="Not Found url" />
            <Link to="/">
                <button className="btn btn-outline-success px-5 my-3 ms-0">Go Back to Home</button>
            </Link>
        </div>

    );
}

export default NotFound;