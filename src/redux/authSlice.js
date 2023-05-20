import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        chatId: '',
        idInstance: '1101821228',
        apiTokenInstance: '97647e8611ae4d969163dbb802be57095c5f327535714555aa',
        error: null,
    },

    reducers: {
        isAuth(state, payload) {
            state.idInstance = payload.payload.idInst;
            state.apiTokenInstance = payload.payload.apiToken;
            state.chatId = payload.payload.chatId;
        },
    },
});

export const { isAuth } = authSlice.actions;

export default authSlice.reducer;
