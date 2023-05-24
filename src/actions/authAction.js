import { isLogin, isLogout } from "../redux/authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async (actionData, { rejectWithValue, dispatch }) => {
        const { myName, idInst, apiToken } = actionData;
        try {
            dispatch(isLogin(actionData));
            console.log(actionData);
            localStorage.setItem("auth", "true")
            localStorage.setItem("myName", myName)
            localStorage.setItem("idInstance", idInst)
            localStorage.setItem("apiTokenInstance", apiToken)
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            localStorage.removeItem("auth")
            localStorage.removeItem("myName")
            localStorage.removeItem("idInstance")
            localStorage.removeItem("apiTokenInstance")
            dispatch(isLogout());
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, { rejectWithValue, dispatch }) => {
        const isAuth = localStorage.getItem("auth") ?? false
        const myName = localStorage.getItem("myName") ?? 'none-myName'
        const idInst = localStorage.getItem("idInstance") ?? "none-idInstance"
        const apiToken = localStorage.getItem("apiTokenInstance") ?? "none-apiTokenInstance"
        const actionData = { isAuth, myName, idInst, apiToken }
        try {
            if (isAuth) {
                dispatch(login(actionData));
            }

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)