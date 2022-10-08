import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

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
      <div className="heading">
        <h1>Login</h1>
        <p>
          <i>login to post comments</i>
        </p>
      </div>
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
        <button type="submit">
          Login <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
        </button>
      </Form>
      <div className="form-bottom">
        <div className="sign-up-container">
          <p>No Account? </p>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
