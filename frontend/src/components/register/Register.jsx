import React from "react";
import { Form, Link } from "react-router-dom";
import "../register/register.css";
function Register() {
  return (
    <div className="Register">
      <Form method="post" className="register-form">
        <label className="username">
          <input
            type="text"
            name="username"
            aria-label="username"
            placeholder="Username"
          ></input>
        </label>
        <label className="email">
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
        <button type="submit">Sign Up</button>
      </Form>
      <div className="form-bottom">
        <div className="sign-up-container">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>

        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Register;
