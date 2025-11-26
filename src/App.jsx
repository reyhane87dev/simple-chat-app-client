import {MainContext} from './context/MainContext'
import { useContext } from 'react';
import JoinChatPage from './pages/JoinChatPage';
import ChatPage from './pages/ChatPage';

function App (){
  const {userData : {roomId}} = useContext(MainContext);
  if (roomId) return <ChatPage />
  else return <JoinChatPage />
}

export default App