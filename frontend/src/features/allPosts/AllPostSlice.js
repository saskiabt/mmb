import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../../api/posts";

const initialState = {
  allPosts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (thunkAPI) => {
    try {
      return await fetchAllPosts();
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

export const allPostSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // action.payload is what gets returned from the function being called
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allPosts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = allPostSlice.actions;
export default allPostSlice.reducer;
