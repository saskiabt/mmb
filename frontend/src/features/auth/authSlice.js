import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, logoutUser, loginUser } from "../../api/users";

//get user token from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  // if there's a user in local storage, use that, otherwise set to null
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await addUser(user);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      if (err) console.log(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await loginUser(user);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    if (err) console.log(err);
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      return await logoutUser(user);
    } catch (err) {
      if (err) console.log(err);
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,

  //reducers are SYNC functions to manipulate the state
  reducers: {
    // use this function after user logs in
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  // extra reducers are async (thunk) functions to manuiplate the state
  extraReducers: (builder) => {
    // set isLoading state = true while the register function is pending
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // action.payload is what gets returned from the 'register' function above
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // sending the message to the payload will send the error message to the Thunk API in the register function, which lets us save the message to state
        state.message = action.payload;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // action.payload is what gets returned from the 'register' function above
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // sending the message to the payload will send the error message to the Thunk API in the register function, which lets us save the message to state
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        // action.payload is what gets returned from the 'register' function above
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
