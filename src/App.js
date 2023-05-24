import './App.scss';
import { useSelector, useDispatch } from "react-redux";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import { useEffect } from 'react';
import { checkAuth, login } from './actions/authAction';

//точка входа в приложение
//если данные данные из системы GREEN-API (idInstance, apiTokenInstance)
//введены то произойдет переключение на страницу с чатом
//надо переделать на ROUTE
function App() {
  const { isAuth } = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [])

  return (
    <div className="app">
      {isAuth ? <ChatPage /> : <AuthPage />
      }
    </div>
  );
}

export default App;
