import { sendMessageAPI, getMessageAPI } from "../api/api";
import { addMessage } from "../redux/chatSlice";
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
            const resolved = await getMessageAPI.getMessage(idInstance, apiTokenInstance);
            const message = resolved.body.messageData.extendedTextMessageData.text;
            const receiptId = resolved.receiptId
            dispatch(addMessage({ message }));
            getMessageAPI.deleteNotice(idInstance, apiTokenInstance, receiptId)
            return resolved;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }

)

