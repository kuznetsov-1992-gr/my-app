import React, { useEffect, useState, useRef } from "react";

export const MassageList = () => {
 



  const [massageList, setMassage] = useState([
    { author: "Поле сообщений:", massage: "" },
  ]);
  const [text, setText] = useState("");

  const pushMassage = () => {
    setMassage((massageList) => [
      ...massageList,
      { author: "User", massage: text },
    ]);
    setText("");
  };

  let ref = useRef(null);

  useEffect(() => {
    if (massageList.length > 1) {
      const UserLength = massageList[massageList.length - 1];
      if (UserLength.author === "User") {
        console.log(UserLength);
        clearTimeout(ref.current);
        ref.current = setTimeout(() => {
          setMassage((massageList) => [
            ...massageList,
            { author: "BOT", massage: "ПРИвет" },
          ]);
        }, 1500);
      }
    }
  }, [massageList.length - 1]);

  console.log(massageList);
  return (
    <div>
      {massageList.map((mas) => (
        <div key={mas.id}>
          <h3>{mas.author}</h3>
          <p>{mas.massage}</p>
        </div>
      ))}

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={pushMassage}>Отправить</button>
    </div>
  );
};
