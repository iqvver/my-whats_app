import * as axios from "axios";

// компонент Api в котором формируется запрос на сервер и получает ответ
// базовый адрес запроса на сервер
const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.green-api.com`,
    headers: {
        "Content-Type": "application/json"
    },
});

// получение массива со всеми пользователями
export const authAPI = {
    login(IdInstance, ApiTokenInstance) {
        return instance.post(``, { IdInstance, ApiTokenInstance })
            // Запрос выполнен, и сервер ответил все ок
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}