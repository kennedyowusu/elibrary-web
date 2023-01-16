import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication/loginSlice";

export const store = configureStore({
 reducer: {
  // Add the reducer here
  auth: authSlice,
  // posts: postsSlice.reducer,
  // comments: commentsSlice.reducer,
  // users: usersSlice.reducer,
  // notifications: notificationsSlice.reducer,
  },
});