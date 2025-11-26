import { memo, useContext, useEffect } from "react"
import { MainContext } from "../context/MainContext"
import { socket } from "../main";
import YourMessageComponent from './YourMessageComponent'
import MessageFromOthersComponent from './MessageFromOthersComponent'

function ChatBody() {
  const {userData, messageList, setMessages} = useContext(MainContext);
  
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages(prev => [...prev, newMessage]);
    };

    socket.on("get_mess", handleNewMessage);

    return () => {
      socket.off("get_mess", handleNewMessage);
    };

  }, [setMessages]);

  return (
    <div className="px-4 bg-slate-950 flex-10/12 overflow-auto py-2" >
      <div className="container mx-auto flex flex-col gap-2" >
        <ul className="bg-slate-950 flex-10/12 overflow-auto py-2 flex flex-col gap-2" >
          {
            messageList.map((message,index) => {
              return message.autorId === userData.id ? 
                <YourMessageComponent key={index} data={message} /> : 
                <MessageFromOthersComponent key={index} data={message} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default memo(ChatBody)