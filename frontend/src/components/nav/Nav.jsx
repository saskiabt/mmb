import React from "react";
import "./styles/nav.css";
import "../../icons/menu-icon.png";

function Nav({ isHidden, setIsHidden }) {
  const toggleForm = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else setIsHidden(false);
  };
  return (
    <div className="nav-wrapper">
      <button className="nav-button" onClick={toggleForm}>
        {isHidden && <i className="fa-solid fa-bars"></i>}
        {!isHidden && <i className="fa-solid fa-x"></i>}
      </button>
    </div>
  );
}

export default Nav;
