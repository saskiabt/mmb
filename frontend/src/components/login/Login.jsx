import React from "react";
import { Form, Link } from "react-router-dom";
import "./login.css";

function Login() {
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

        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Login;
