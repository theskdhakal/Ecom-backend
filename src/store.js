import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user-redux/userSlice";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system-state/systemSlice";
export default configureStore({
  reducer: {
    admin: adminReducer,
    cat: catReducer,
    system: systemReducer,
  },
});
