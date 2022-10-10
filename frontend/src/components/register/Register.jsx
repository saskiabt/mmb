import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "../login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../spinner/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get the state variables from the auth state slice via useSelector function.
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) {
      navigate("/dashboard");
    }

    // if (isLoading) {
    //   return <Spinner></Spinner>;
    // }
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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else if (!email.includes("@")) {
      toast.error("Incorrect email format");
    } else if (username.includes(" ")) {
      toast.error("No spaces in Username");
    } else {
      // const userData = {
      //   username,
      //   email,
      //   password,
      //   confirmPassword,
      // };

      console.log(formData);
      dispatch(register(formData));
    }
  };

  return (
    <div className="Register login-register">
      <div className="heading">
        <h1>Create Account</h1>
      </div>
      <div className="form">
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="form-control">
            <input
              type="text"
              name="username"
              aria-label="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <input
              type="email"
              name="email"
              aria-label="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <input
              type="text"
              name="password"
              aria-label="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <input
              type="text"
              name="confirmPassword"
              aria-label="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <div className="form-bottom">
          <p>Already have an account?</p>
          <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
