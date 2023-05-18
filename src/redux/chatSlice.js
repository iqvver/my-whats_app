import { createSlice } from "@reduxjs/toolkit";
import { fetchChat } from "../actions/actions";
import { setError } from '../helpers/helper-reduser'

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: '79622689318',
        currentChatId: '',
    },

    reducers: {
        addChat: (state, payload) => {
            payload.payload.newChatId = payload.payload.newChatId.replace(/[^0-9]/g, "");
            state.chats = [...state.chats, payload.payload]
        },
        setCurrentChat: (state, payload) => {
            let chatId = state.chats.findIndex(chat => chat.newChatId === payload.payload)
            state.currentChat = payload.payload;
            state.currentChatId = chatId;
        },
        addMessage: (state, payload) => {
            let chatId = state.chats.findIndex(chat => chat.newChatId === state.currentChat)
            state.chats[chatId].messages = [...state.chats[chatId].messages, payload.payload];
        },

        extraReducers: {
            [fetchChat.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [fetchChat.fulfilled]: (state, action) => {
                state.status = 'resolved';
                state.res = action.payload
            },
            [fetchChat.rejected]: setError,
        },
    },
});

export const { setCurrentChat, addChat, addMessage } = chatSlice.actions;

export default chatSlice.reducer;