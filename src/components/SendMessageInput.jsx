import { useCallback, memo, useRef, useContext } from 'react'
import ButtonComponent from './ButtonComponent';
import { MainContext } from '../context/MainContext';
import { socket } from '../main';

function SendMessageInput() {  
  const messageInput = useRef(null);
  const {userData} = useContext(MainContext);


  const sendMessage = useCallback(() => {

    const date = new Date();
    const messageData = {
        message:messageInput.current.value,
        autor: userData.name,
        autorId: userData.id,
        room: userData.roomId,
        date: date.getHours() + ":" + date.getMinutes(),
    };

    try {
        socket.emit("send_mess", messageData);
        messageInput.current.value = '';
    } catch(error) {
        alert("خطا هنگام ارسال پیام" + "\n\n" + error.message);
    } 

  }, []);


  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }, []);

  return (
    <div className="bg-slate-900 py-2 flex-1/12 px-4">
      <div className="container mx-auto flex justify-center">
        <div className="bg-slate-700 p-2 flex rounded-md w-full max-w-2xl">
          <input
            id="mess-input"
            ref={messageInput}
            className="p-2 focus:outline-0 flex-1 text-white bg-transparent"
            type="text"
            placeholder="پیامتو اینجا بنویس"
            onKeyPress={handleKeyPress}
          />
          <ButtonComponent 
            action={sendMessage} 
            text={"فرستادن"}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(SendMessageInput)