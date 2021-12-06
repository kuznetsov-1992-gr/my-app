import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { Chat } from "../Screens/Chat";
import { ROUTERS } from "./routers";
import { NoChat } from "../Screens/NoChat/NoChat";


export const Router = () => {
  return (
    <BrowserRouter>
      
        <nav>
          <Link to={ROUTERS.NO_CHAT}>
            <LocalPostOfficeOutlinedIcon />
          </Link>
      
          <Link to={ROUTERS.PROFILE}>
            <PersonIcon />
          </Link>
      
          <Link to={ROUTERS.HOME}>
            <HomeOutlinedIcon />
          </Link>
        </nav>
      

      <Switch>
        <Route exact path={ROUTERS.HOME} render={()=> <Home/>}>
        </Route>
        <Route exact path={ROUTERS.NO_CHAT}>
          <NoChat />
        </Route>
        <Route exact path={ROUTERS.PROFILE}>
          <Profile />
        </Route>
        <Route exact path={ROUTERS.CHAT} render={()=> <Chat/>}/>
        <Route path={ROUTERS.NOT_FOUND}>ERROR 404</Route>
        <Route>
          <Redirect to={ROUTERS.NOT_FOUND}/>
        </Route>
        

        
      </Switch>
    </BrowserRouter>
  );
};
