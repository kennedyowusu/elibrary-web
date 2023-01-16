import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
 reducer: {
  // Add the reducer here
  auth: authSlice.reducer,
  // posts: postsSlice.reducer,
  // comments: commentsSlice.reducer,
  // users: usersSlice.reducer,
  // notifications: notificationsSlice.reducer,
  },
});