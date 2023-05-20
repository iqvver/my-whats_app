import { createSlice } from "@reduxjs/toolkit";
import { sendNewMessage, receiveMessage } from "../actions/actions";
import { setError } from '../helpers/helper-reduser'

//срез чатов и сообщений к ним
const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        currentChat: '',
        currentChatId: '',
        status: '',
    },

    reducers: {
        //добавление чата
        addChat: (state, payload) => {
            payload.payload.newChatId = payload.payload.newChatId.replace(/[^0-9]/g, "");
            state.chats = [...state.chats, payload.payload]
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

        extraReducers: {
            //toolkit
            [sendNewMessage.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [sendNewMessage.fulfilled]: (state) => {
                state.status = 'resolved';
            },

            [receiveMessage.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [receiveMessage.fulfilled]: (state) => {
                state.status = 'resolved';
            },
            [sendNewMessage.rejected]: setError,
            [receiveMessage.rejected]: setError,
        },
    },
});

export const { setCurrentChat, addChat, addReseivedMessage } = chatSlice.actions;

export default chatSlice.reducer;