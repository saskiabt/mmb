import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../spinner/Spinner.css";

function Spinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Spinner;
