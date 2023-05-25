import { createSlice } from "@reduxjs/toolkit";

//срез чатов и сообщений к ним
const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: '',
        currentChatId: '',
        status: '',
        chatError: false,
    },

    reducers: {
        //добавление чата
        addChat: (state, payload) => {
            state.chats = [...state.chats, payload.payload]
        },

        addChatError: (state, payload) => {
            state.chatError = payload.payload;
        },

        //выбор чата
        setCurrentChat: (state, payload) => {
            let chatId = state.chats.findIndex(chat => chat.newChatId === payload.payload)
            state.currentChat = payload.payload;
            state.currentChatId = chatId;
        },

        //добавление сообщений к соответствующему чату
        //по отправителю
        addReseivedMessage: (state, payload) => {
            const chatId = state.chats.findIndex(chat => chat.newChatId === payload.payload.chatId)
            state.chats[chatId].messages = [...state.chats[chatId].messages, payload.payload];
        },
    },
});

export const { setCurrentChat, addChat, addChatError, addReseivedMessage } = chatSlice.actions;

export default chatSlice.reducer;