import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./MassageList.css";


export const MessageList = ({children}) => {
  const getId = uuidv4();
  


  const [messageList, setMassage] = useState([
    { author: "Поле сообщений:", message: "", id: 'cc1' },
  ]);
  const [text, setText] = useState("");

  const pushMassage = () => {
    setMassage((messageList) => [
      ...messageList,
      { author: "User", message: text, id: getId },
    ]);
    setText("");
  };
 
 
  
  
  let ref = useRef(null);
  const texterea = useRef()

  useEffect(() => {
  
      texterea.current?.focus()
      if (messageList[messageList.length - 1].author === "User") {
        // console.log(UserLength);
        clearTimeout(ref.current);
        ref.current = setTimeout(() => {
          setMassage((messageList) => [
            ...messageList,
            { author: "BOT", message: "ПРИвет", id: getId },
          ]);
        }, 1500);
      }
    
  }, [messageList.length]);

  

  
  return (
    <div className="field">
      <div className="field-chat" >
        {messageList.map((mes) => (
          <div key={mes.id}>
            <h3>{mes.author}</h3>
            <p>{mes.message}</p>
          </div>
        ))}
      </div>
     
      <div className="input-btn">
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Placeholder"
          multiline
          variant="filled"
          inputRef={texterea}
        />
        <Button
          id="button-send"
          onClick={pushMassage}
          variant="contained"
          endIcon={<SendIcon />}
          
        >
          Лети
        </Button>
      </div>
     
      
    </div>
  );
};
