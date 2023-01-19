import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication/loginSlice";
import registerSlice from "../features/authentication/registerSlice";

export const store = configureStore({
  reducer: {
  // Add the reducer here
    auth: authSlice,
    
  },
});