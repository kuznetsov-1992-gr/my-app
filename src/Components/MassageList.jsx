import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./MassageList.css";


export const MassageList = ({children}) => {
  const getId = uuidv4();
  


  const [massageList, setMassage] = useState([
    { author: "Поле сообщений:", massage: "", id: 'cc1' },
  ]);
  const [text, setText] = useState("");

  const pushMassage = () => {
    setMassage((massageList) => [
      ...massageList,
      { author: "User", massage: text, id: getId },
    ]);
    setText("");
  };
 
 
  
  
  let ref = useRef(null);
  const texterea = useRef()

  useEffect(() => {
  
      texterea.current?.focus()
      if (massageList[massageList.length - 1].author === "User") {
        // console.log(UserLength);
        clearTimeout(ref.current);
        ref.current = setTimeout(() => {
          setMassage((massageList) => [
            ...massageList,
            { author: "BOT", massage: "ПРИвет", id: getId },
          ]);
        }, 1500);
      }
    
  }, [massageList.length]);

  

  
  return (
    <div className="field">
      <div className="field-chat" >
        {massageList.map((mas) => (
          <div key={mas.id}>
            <h3>{mas.author}</h3>
            <p>{mas.massage}</p>
          </div>
        ))}
      </div>
      {/* <input value={text} onChange={(e) => setText(e.target.value)} /> */}
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
      {/* <button onClick={pushMassage}>Отправить</button> */}
      
    </div>
  );
};
