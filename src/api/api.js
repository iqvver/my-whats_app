import axios from 'axios';

const baseURL = `https://api.green-api.com`;

export const chatAPI = {
    async sendMessage(message, idInstance, apiTokenInstance, currentChat) {
        const body = {
            chatId: `${currentChat}@c.us`,
            message: message,
        }

        await axios.post(`${baseURL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body, {
            headers: { "Content-Type": "application/json" },
        })
    }
}