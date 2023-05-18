import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: '',
        currentChatId: '',
    },

    reducers: {
        addChat: (state, payload) => {
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
    },
});

export const { setCurrentChat, addChat, addMessage } = chatSlice.actions;

export default chatSlice.reducer;