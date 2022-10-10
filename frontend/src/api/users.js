// functions to make HTTP requests and send the data back

import axios from "axios";

const API_URL = "/api/users/";

// register user
const addUser = async (userData) => {
  try {
    // axios puts the response into an object called response.data
    const response = await axios.post(API_URL, userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (err) {
    if (err) console.log(err);
  }
};

const loginUser = async (userData) => {
  try {
    // axios puts the response into an object called response.data
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (err) {
    if (err) console.log(err);
  }
};

const logoutUser = async () => {
  try {
    // more advanced way to do this would be to use server and set http cookie
    localStorage.removeItem("user");
  } catch (err) {
    if (err) console.log(err);
  }
};

export { addUser, logoutUser, loginUser };
