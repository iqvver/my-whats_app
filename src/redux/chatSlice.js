import { createSlice } from "@reduxjs/toolkit";
import { sendNewMessage, receiveMessage, addNewChat } from "../actions/actions";
import { setError } from '../helpers/helper-reduser'

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

        extraReducers: {
            //toolkit
            [addNewChat.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [addNewChat.fulfilled]: (state) => {
                state.status = 'resolved';
            },
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
            [addNewChat.rejected]: setError,
        },
    },
});

export const { setCurrentChat, addChat, addChatError, addReseivedMessage } = chatSlice.actions;

export default chatSlice.reducer;