import { createSlice } from "@reduxjs/toolkit";

//срез входа в чат
const authSlice = createSlice({
    name: "auth",
    initialState: {
        myName: '',
        idInstance: '',
        apiTokenInstance: '',
        isAuth: false,
    },

    reducers: {
        isLogin(state, payload) {
            state.myName = payload.payload.myName;
            state.idInstance = payload.payload.idInst;
            state.apiTokenInstance = payload.payload.apiToken;
            state.isAuth = true;
        },
        isLogout(state) {
            state.myName = '';
            state.idInstance = '';
            state.apiTokenInstance = '';
            state.isAuth = false;
        },
    },
});

export const { isLogin, isLogout } = authSlice.actions;

export default authSlice.reducer;
