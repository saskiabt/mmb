import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./MobileNav.css";
import { faRss } from "@fortawesome/free-solid-svg-icons";

function MobileNav({ isExpanded, setIsExpanded }) {
  const navigate = useNavigate();
  const toggleDropDown = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="MobileNav">
      <div className="mobile-horizontal">
        <button type="button" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faRss} />
        </button>
        <button type="button" onClick={toggleDropDown}>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCaretSquareDown} />
        </button>
      </div>

      {isExpanded && (
        <div className="mobile-dropdown">
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
          <button type="button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
