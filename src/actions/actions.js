import { sendMessageAPI, getMessageAPI } from "../api/api";
import { addReseivedMessage } from "../redux/chatSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendNewMessage = createAsyncThunk(
    'chat/sendNewMessage',
    async (apiData, { rejectWithValue }) => {
        const { idInstance, apiTokenInstance, message, currentChat } = apiData;
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
            const message = data.body.messageData.textMessageData.textMessage;
            const sender = data.body.senderData.chatId.replace(/[^0-9]/g, "");
            const textMessage = { message, sender }
            dispatch(addReseivedMessage(textMessage));
            let receiptId = data.receiptId;

            getMessageAPI.deleteNotice(idInstance, apiTokenInstance, receiptId)
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)
