import { sendMessageAPI, getMessageAPI } from "../api/api";
import { addChat, addChatError, addReseivedMessage } from "../redux/chatSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewChat = createAsyncThunk(
    'chat/addNewChat',
    async (actionData, { rejectWithValue, dispatch }) => {
        const { idChat, newChat, messages } = actionData;
        try {
            let newChatId = newChat.replace(/[^0-9]/g, "");
            if (newChatId.length >= 11) {
                dispatch(addChat({ idChat, newChatId, messages }));
                dispatch(addChatError(false));
            } else {
                dispatch(addChatError(true));
                setTimeout(() => {
                    dispatch(addChatError(false));
                }, 3000);
            }

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)


export const sendNewMessage = createAsyncThunk(
    'chat/sendNewMessage',
    async (actionData, { rejectWithValue }) => {
        const { idInstance, apiTokenInstance, message, currentChat } = actionData;
        try {
            const resolved = await sendMessageAPI.sendMessage(idInstance, apiTokenInstance, message, currentChat);
            return resolved;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const receiveMessage = createAsyncThunk(
    'chat/receiveMessage',
    async (apiData, { rejectWithValue, dispatch }) => {
        const { idInstance, apiTokenInstance } = apiData;
        try {
            const data = await getMessageAPI.getMessage(idInstance, apiTokenInstance)
            let message = data.body.messageData?.textMessageData?.textMessage;
            {
                message ? message = data.body.messageData?.textMessageData?.textMessage :
                    message = data.body.messageData.extendedTextMessageData.text
            }

            const chatId = data.body.senderData.chatId.replace(/[^0-9]/g, "");
            const textMessage = { message, chatId }
            dispatch(addReseivedMessage(textMessage));
            let receiptId = data.receiptId;

            getMessageAPI.deleteNotice(idInstance, apiTokenInstance, receiptId)
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)
