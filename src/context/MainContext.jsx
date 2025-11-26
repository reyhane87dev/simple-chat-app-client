import { createContext, useState } from "react";

const MainContext = createContext();

function MainContextProvider({children}){
  const [error,setError] = useState({
    name : '',
    roomId : '',
  });
  const [userData,setUserData] = useState({
    name : '',
    roomId : '',
  });

  const [messageList,setMessages] = useState([]);

  const value = {error,setError,userData,setUserData,messageList,setMessages};

  return (
    <MainContext.Provider value={value} >
      {children}
    </MainContext.Provider>
  )
}

export {MainContextProvider,MainContext}