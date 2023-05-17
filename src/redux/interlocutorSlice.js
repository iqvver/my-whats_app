import { createSlice } from "@reduxjs/toolkit";

const interlocutorSlice = createSlice({
    name: "interlocutor",
    initialState: {
        chatId: '',
    },

    reducers: {
        setInterlocutor(state, payload) {
            state.chatId = payload.payload.chatId;
        },
    },
});

export const { setInterlocutor } = interlocutorSlice.actions;

export default interlocutorSlice.reducer;