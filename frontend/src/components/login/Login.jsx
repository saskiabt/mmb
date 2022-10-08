import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faHome } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="Login">
      <Form method="post" className="login-form">
        <label className="username">
          <input
            type="text"
            name="email"
            aria-label="email"
            placeholder="Email Address"
          ></input>
        </label>
        <label className="password">
          <input
            type="text"
            name="password"
            aria-label="password"
            placeholder="Password"
          ></input>
        </label>
        <button type="submit">Login</button>
      </Form>
      <div className="form-bottom">
        <div className="sign-up-container">
          <p>No Account? </p>
          <Link to="/register">Sign Up</Link>
        </div>

        <Link to="/">
          <FontAwesomeIcon icon={faHome}>Home</FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}

export default Login;
