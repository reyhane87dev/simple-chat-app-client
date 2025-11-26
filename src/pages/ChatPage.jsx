
import { memo } from "react";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import SendMessageInput from "../components/SendMessageInput";

function ChatPage (){
  return (
    <div className="h-[100vh] flex flex-col " >
      {/* header start */}
        <ChatHeader />
      {/* header end */}

      {/* body start */}
        <ChatBody />
      {/* body end */}

      {/* send message start */}
        <SendMessageInput />
      {/* send message end */}
    </div>
  )
}
export default memo(ChatPage)
