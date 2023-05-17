import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user-redux/userSlice";

export default configureStore({
  reducer: {
    admin: adminReducer,
  },
});
