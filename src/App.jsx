import React from "react";
import{Provider} from "react-redux"
import "./App.css";
// import { MassageList } from "./Components";
// import { ChatList } from "./Components";
import { Router } from "./Router";
import { store } from "./Store";

export const MyContext = React.createContext({ theme: "dark" });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyContext.Provider
          value={{
            dark: { theme: "dark", name: "Venom" },
            while: { theme: "while", name: "WhileSnowe" },
          }}
        >
          <Router />
        </MyContext.Provider>
        {/* <div className="flex-racurs">
        <ChatList></ChatList>
        <MassageList></MassageList>
      </div> */}
      </Provider>
    </div>
  );
}

export default App;
