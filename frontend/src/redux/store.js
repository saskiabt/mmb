import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/userPosts/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ["post.data"],
      },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }),
});
