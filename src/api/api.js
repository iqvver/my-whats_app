import axios from 'axios';
// компонент Api в котором формируется запрос на сервер и получает ответ
// базовый адрес запроса на сервер

const instance = axios.create({
    baseURL: `https://api.green-api.com`,
    headers: { "Content-Type": "application/json" }
});

//отправка сообщения на сервер
export const sendMessageAPI = {
    async sendMessage(idInstance, apiTokenInstance, message, currentChat,) {
        const body = {
            chatId: `${currentChat}@c.us`,
            message: message,
        }

        const { data } = await instance.post(`/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body)
        return data
    },
}

//получение сообщений(уведомлений)
export const getMessageAPI = {
    async getMessage(idInstance, apiTokenInstance) {
        const { data } = await instance.get(`/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        return data
    },

    async deleteNotice(idInstance, apiTokenInstance, receiptId) {
        setTimeout(async () => {
            await instance.delete(`/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`)
        }, 100)
    }
}