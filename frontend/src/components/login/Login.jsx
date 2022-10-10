import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData));
  };

  return (
    <div className="Login">
      <div className="heading">
        <h1>Login</h1>
        <p>Please sign in to post comments</p>
      </div>
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="username">
            <input
              type="text"
              name="email"
              aria-label="email"
              placeholder="Email Address"
              onChange={handleChange}
            ></input>
          </label>
          <label className="password">
            <input
              type="text"
              name="password"
              aria-label="password"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">
            Login{" "}
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          </button>
        </form>
        <div className="form-bottom">
          <p>No Account? </p>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
