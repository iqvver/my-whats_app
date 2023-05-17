import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import interlocutorReducer from "./interlocutorSlice";

export default configureStore({
    reducer: {
        isAuth: authReducer,
        chatId: interlocutorReducer,
    },
});