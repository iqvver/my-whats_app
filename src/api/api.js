import axios from 'axios';

const baseURL = `https://api.green-api.com`;

export const sendMessageAPI = {
    async sendMessage(idInstance, apiTokenInstance, message, currentChat) {
        const body = {
            chatId: `${currentChat}@c.us`,
            message: message,
        }

        const { data } = await axios.post(`${baseURL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body, {
            headers: { "Content-Type": "application/json" },
        })
        return data
    },
}


export const getMessageAPI = {
    async getMessage(idInstance, apiTokenInstance) {
        const { data } = await axios.get(`${baseURL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        return data
    },

    async deleteNotice(idInstance, apiTokenInstance, receiptId) {
        setTimeout(async () => {
            await axios.delete(`${baseURL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`)
        }, 100)
    }
}