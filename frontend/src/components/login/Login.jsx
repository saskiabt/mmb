import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../spinner/Spinner";
import PwToggle from "../Pw-Toggle/PwToggle";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isPassword, setIsPassword] = useState("password");
  const togglePwVisibility = () => {
    isPassword === "password"
      ? setIsPassword("text")
      : setIsPassword("password");
  };

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, isLoading]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const autoFill = () => {
    document.querySelector("#login-name").value = "test@gmail.com";
    document.querySelector("#login-pw").value = "test";

    setFormData({
      email: "test@gmail.com",
      password: "test",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.email && formData.password) {
      dispatch(login(formData));
    } else {
      alert("Please add username and password");
    }
  };

  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="Login">
      <div className="heading">
        <h1>Login</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label className="username">
            <input
              type="text"
              name="email"
              aria-label="email"
              placeholder="Email Address"
              id="login-name"
              onChange={handleChange}
            ></input>
          </label>
          <div className="group">
            <label className="password">
              <input
                type={isPassword}
                name="password"
                aria-label="password"
                placeholder="Password"
                onChange={handleChange}
                id="login-pw"
              ></input>
            </label>
            <PwToggle
              togglePwVisibility={togglePwVisibility}
              isPassword={isPassword}
              setIsPassword={setIsPassword}
            ></PwToggle>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={autoFill} className="login-button">
            Autofill
          </button>
          <button type="submit" className="login-button">
            Login{" "}
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          </button>
        </div>
      </form>
      <div className="form-bottom">
        <p>No Account? </p>
        <Link to="/register">
          <i>Sign Up</i>
        </Link>
      </div>
    </div>
  );
}

export default Login;
