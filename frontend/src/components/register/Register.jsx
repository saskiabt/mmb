import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../spinner/Spinner";
import PwToggle from "../Pw-Toggle/PwToggle";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPassword, setIsPassword] = useState("password");

  const togglePwVisibility = () => {
    isPassword === "password"
      ? setIsPassword("text")
      : setIsPassword("password");
  };

  const [isPwConfirm, setIsPwConfirm] = useState("password");

  const togglePwConfirmVisibility = () => {
    isPwConfirm === "password"
      ? setIsPwConfirm("text")
      : setIsPwConfirm("password");
  };

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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else if (!email.includes("@")) {
      toast.error("Incorrect email format");
    } else if (username.includes(" ")) {
      toast.error("No spaces in Username");
    } else {
      console.log(formData);
      dispatch(register(formData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="Register">
      <div className="heading">
        <h1>Create Account</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
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
          <div className="pw">
            <div className="group">
              <label className="form-control">
                <input
                  type={isPassword}
                  name="password"
                  aria-label="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </label>
              <PwToggle
                isPassword={isPassword}
                togglePwVisibility={togglePwVisibility}
              ></PwToggle>
            </div>
            <div className="group">
              {" "}
              <label className="form-control">
                <input
                  type={isPwConfirm}
                  name="confirmPassword"
                  aria-label="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </label>
              <PwToggle
                isPassword={isPwConfirm}
                togglePwVisibility={togglePwConfirmVisibility}
              ></PwToggle>
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="login-button">
            {" "}
            Sign Up
          </button>
        </div>
      </form>
      <div className="form-bottom">
        <p>Already have an account?</p>
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
