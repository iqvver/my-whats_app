import './App.scss';
import { useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";

//точка входа в приложение
//если данные данные из системы GREEN-API (idInstance, apiTokenInstance)
//введены то произойдет переключение на страницу с чатом
//надо переделать на ROUTE
function App() {
  const { idInstance, apiTokenInstance, error } = useSelector((state) => state.isAuth);

  return (
    <div className="app">
      {idInstance && apiTokenInstance && !error ? <ChatPage /> : <AuthPage />
      }
    </div>
  );
}

export default App;
