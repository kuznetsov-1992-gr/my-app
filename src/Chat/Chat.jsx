import {ChatList} from "../Components";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
// import { initialChats } from "../Components";
// import { MessageList } from "../Components";


import "./Chat.css"
import { ROUTERS } from "../Router/constants";


const initialChats = {
  id1: {
      name: 'Frend 1',
      message: [{author: 'Bot', text: 'Привет'}]
    },
    id2: {
      name: 'Frend 2',
      message: [{author: 'User', text: 'Парлэ-парла- парламентер'}]
    }
  }


export const Chat = () =>{
 

  const [chat, setChat] = useState(initialChats);
  console.log(chat)
  const {chatId} = useParams();
  console.log(chatId)
 
  
  

  
  // if(!chats[chatId] ){
  //   return <Redirect to={ROUTERS.NO_CHAT}/>
  // }
  
  
    return (
      <>
      <header>Header</header>
      <div className="wrapper">
        <div>
          <ChatList
            chats={chat}
            chatId={chatId}
           /> 
        </div>
        <div>
          {/* <MessageList message={chat[chatId].message} /> */}
        </div>
      </div>
    </>
  
    )
}