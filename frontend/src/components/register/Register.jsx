import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "../register/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Register">
      <div className="heading">
        <h1>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </h1>
        <p>Create Account</p>
      </div>
      <Form method="post" className="register-form">
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
      </Form>
      <div className="form-bottom">
        <div className="sign-up-container">
          <p>Already have an account?</p>
          <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
          </Link>
        </div>
        <Link to="/">
          <FontAwesomeIcon icon={faHome}>Home</FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}

export default Register;
