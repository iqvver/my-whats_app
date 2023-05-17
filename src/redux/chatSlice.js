import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: {
            chatId: "",
            messages: [],
        },
    },

    reducers: {
        addChat: (state, payload) => {
            state.chats = [...state.chats, payload.payload]
        },
        setCurrentChat: (state, payload) => {
            const newCurrentChat = state.chats.find((chat) => chat.chatId === payload.payload)
            state.currentChat = newCurrentChat
        },
        addMessage: (state, payload) => {
            state.currentChat = {
                ...state.currentChat,
                messages: [...state.currentChat.messages, payload.payload],
            }
        },
    },
});

export const { setCurrentChat, addChat, addMessage } = chatSlice.actions;

export default chatSlice.reducer;