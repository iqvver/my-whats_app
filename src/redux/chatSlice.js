import { createSlice } from "@reduxjs/toolkit";
import { sendNewMessage, receiveMessage } from "../actions/actions";
import { setError } from '../helpers/helper-reduser'

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: '',
        currentChatId: '',
        status: '',
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

        addReseivedMessage: (state, payload) => {
            const chatId = state.chats.findIndex(chat => chat.newChatId === payload.payload.sender)
            state.chats[chatId].messages = [...state.chats[chatId].messages, payload.payload];
        },

        extraReducers: {
            [sendNewMessage.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [sendNewMessage.fulfilled]: (state, action, payload) => {
                state.status = 'resolved';
            },

            [receiveMessage.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [receiveMessage.fulfilled]: (state, payload, action) => {
                state.status = 'resolved';
            },
            [sendNewMessage.rejected]: setError,
            [receiveMessage.rejected]: setError,
        },
    },
});

export const { setCurrentChat, addChat, addMessage, addReseivedMessage } = chatSlice.actions;

export default chatSlice.reducer;