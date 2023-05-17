import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: '',
        idInstance: '',
        apiTokenInstance: '',
        error: null,
    },

    reducers: {
        isAuth(state, payload) {
            state.idInstance = payload.payload.idInst;
            state.apiTokenInstance = payload.payload.apiToken;
            state.name = payload.payload.name;
        },
    },
});

export const { isAuth } = authSlice.actions;

export default authSlice.reducer;
