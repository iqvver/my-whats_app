import * as axios from "axios";

const baseURL = `https://api.green-api.com`;

async function sendMessage(idInstance, apiTokenInstance, message, chatId) {
    const body = {
        chatId: `${chatId}@c.us`,
        message: message,
    }

    const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body, {
        headers: { "Content-Type": "application/json" },
    })
    return data
}