import './App.scss';
import { useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  const authItems = useSelector((state) => state.isAuth);

  return (
    <div className="app">
      {authItems.name && authItems.idInstance && authItems.apiTokenInstance && !authItems.error ? <ChatPage /> : <AuthPage />}
    </div>
  );
}

export default App;
