import { chatAPI } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChat = createAsyncThunk(
    'chat/fetchChat',
    async (apiData, { rejectWithValue }) => {
        const { message, idInstance, apiTokenInstance, currentChat } = apiData;
        try {
            const resolved = await chatAPI.sendMessage(message, idInstance, apiTokenInstance, currentChat);
            return resolved;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }

)

