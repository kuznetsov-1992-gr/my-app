import {ChatList} from "../../Components";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {initChat} from "./initChat"

import { MessageList } from "../../Components";



import "./Chat.css"
import { ROUTERS } from "../../Router";





export const Chat = () =>{
 

  const [chat, setChat] = useState(initChat);
  
  const {chatId} = useParams();
  
 
  
  

  
  if(!chat[chatId] ){
    return <Redirect to={ROUTERS.NO_CHAT}/>
  }
  
  
    return (
      <>
      <header>Header</header>
      <div className="flex-racurs">
        <div>
          <ChatList
            chats={chat}
            chatId={chatId}
           /> 
        </div>
        <div>
          <MessageList message={chat[chatId].message} />
        </div>
      </div>
    </>
  
    )
}