import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import chatSlice from "./chatSlice";

export default configureStore({
    reducer: {
        isAuth: authReducer,
        chat: chatSlice,
    },
});