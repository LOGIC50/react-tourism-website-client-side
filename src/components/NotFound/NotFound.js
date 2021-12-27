import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <h4>404 - Not Found</h4>
      <br />
      <button>
        <Link to="./home" className="linktop">
          Go to Homepage
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
