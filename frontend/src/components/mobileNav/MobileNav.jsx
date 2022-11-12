import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./MobileNav.css";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { logout, reset } from "../../features/auth/authSlice";

function MobileNav({ isExpanded, setIsExpanded }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toggleDropDown = () => {
    setIsExpanded(!isExpanded);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    console.log("navigated!");
  };

  return (
    <div className="MobileNav">
      <div className="mobile-horizontal">
        <button type="button" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faRss} />
        </button>
        <button type="button" onClick={toggleDropDown}>
          <FontAwesomeIcon icon={faUser} />
          {!user ? <FontAwesomeIcon icon={faCaretSquareDown} /> : null}
        </button>
      </div>

      {!user && isExpanded && (
        <div className="mobile-dropdown">
          <button
            type="button"
            id="mobile-login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button type="button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      )}
      {isExpanded && user && (
        <div className="mobile-dropdown">
          <button
            type="button"
            id="mobile-login"
            onClick={() => navigate("/dashboard")}
          >
            My Posts
          </button>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
