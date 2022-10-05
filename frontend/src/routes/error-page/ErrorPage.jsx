import React from "react";
import { Link } from "react-router-dom";
import "../error-page/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <h3>
        <i>404 Error: Page Not Found</i>
      </h3>
      <Link to={"/"} className="back">
        Back
      </Link>
    </div>
  );
}

export default ErrorPage;
