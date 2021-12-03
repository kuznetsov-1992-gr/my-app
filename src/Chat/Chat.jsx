import {ChatList} from "../Components";
import { useState } from "react";
import { useParams } from "react-router";
import { initialChat } from "./initialChat";
import { MessageList } from "../Components";

import "./Chat.css"

export const Chat = () =>{
  const {chatId} = useParams();
  

  const [chats, setCHats] = useState(initialChat);
  if(!chats[chatId]){
    return null;
  }
  
  console.log(chats)
    return (
      <>
      <header>Header</header>
      <div className="wrapper">
        <div>
          <ChatList
            chats={chats}
            chatId={chatId}
           /> 
        </div>
        <div>
          <MessageList message={chats[chatId].message} />
        </div>
      </div>
    </>
  
    )
}