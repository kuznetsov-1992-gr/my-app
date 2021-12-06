import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./MassageList.css";


export const MessageList = ({message}) => {
  const getId = uuidv4();
  console.log(message)
  


  const [messageList, setMassage] = useState(message);
  const [textValue, setText] = useState("");

  const pushMassage = () => {
    setMassage((messageList) => [
      ...messageList,
      { author: "User", text: textValue, id: getId },
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
            { author: "BOT", text: "ПРИвет", id: getId },
          ]);
        }, 1500);
      }
    
  }, [messageList.length]);

  // console.log(messageList)

  
  return (
    <div className="field">
      <div className="field-chat" >
        {messageList.map((mes) => (
          <div key={mes.id}>
            <h3>{mes.author}</h3>
            <p>{mes.text}</p>
          </div>
        ))}
      </div>
     
      <div className="input-btn">
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          value={textValue}
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
