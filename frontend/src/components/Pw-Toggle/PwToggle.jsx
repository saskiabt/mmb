import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../login/login.css";

function PwToggle({ togglePwVisibility, isPassword, setIsPassword }) {
  return (
    <div className="pw-toggle">
      <label className="pw-checkbox">
        <input type="checkbox" name="show-password" aria-label="password" />
        <button
          className="checkmark"
          type="button"
          onClick={togglePwVisibility}
        >
          {isPassword === "password" ? (
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </button>
      </label>
    </div>
  );
}

export default PwToggle;
