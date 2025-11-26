


import { memo, useCallback, useContext, useRef } from 'react'
import JoinChatInputComponent from '../components/JoinChatInput'
import { MainContext } from '../context/MainContext';
import ButtonComponent from '../components/ButtonComponent';
import {socket} from '../main.jsx'
import {v6 as uuid} from 'uuid'
function JoinChatPage() {

  const nameInputRef = useRef(null);
  const roomIdInputRef = useRef(null);

  const {error,setUserData,setError} = useContext(MainContext)

  const submit = useCallback(async ()=>{
      // check if inputs were empty
    
      const errors = {name : "",roomId : ''};
      if (!nameInputRef.current.value) errors.name = "نام نمیتواند خالی باشد"
      else error.name = ""

      if (!roomIdInputRef.current.value) errors.roomId = "شناسه گفتگو نمیتواند خالی باشد"
      else errors.roomId = "";

      setError(errors);

      if (!errors.name && !errors.roomId ){
        try{
          const id = uuid();
          await socket.emit("join_room",roomIdInputRef.current.value);
            setUserData({
              name : nameInputRef.current.value,
              id,
              roomId : roomIdInputRef.current.value,
            });
        }
        catch(error){
          alert(" خطا هنگام ورود به چت" + "\n\n" + error.message)
        }
      }

    },[]);

  return (
    <section className='join-chat-page-background' >
      <div className='join-chat-page-container' >
        {/* title start */}
         <h2 className="text-2xl text-center ">
            <span className="text-orange-500">شروع</span> گفتگوی زنده
         </h2>
         {/* title end */}
        {/* form start  */}
        <div className='flex flex-col gap-2' >
            {/* name input start */}
              <JoinChatInputComponent placeholder={"اسمتو اینجا بنویس"} description={null} ref={nameInputRef} error={error.name} />
            {/* name input end */}

            {/* room id  input start */}
              <JoinChatInputComponent placeholder={"شناسه گفتگو رو اینجا بنویس"} description={"اگه هیچ گفتگویی با شناسه وارد شده وجود نداشته باشه یه گفتگو اینجاد میشه در غیر اینصورت به یه گفتگو میپیوندی ..."} ref={roomIdInputRef} error={error.roomId} />
            {/* room id input end */}


            {/* submit button start */}
              <ButtonComponent action={submit} text={'پیوستن'} />
            {/*submit button end */}

        </div>
        {/* form end */}
      </div>
    </section>
  )
}

export default memo(JoinChatPage)