import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
// import {Switch} from "@mui/material"
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Chat } from "../Chat";
import { ROUTERS } from "./constants/";
import { initialChats } from "../Components";

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
          {/* <Home /> */}
        </Route>
        <Route path={ROUTERS.NO_CHAT}>
          <Chat initialChats={initialChats}/>
        </Route>
        <Route exact path={ROUTERS.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTERS.NOT_FOUND}>ERROR 404</Route>
        <Route>
          <Redirect to={ROUTERS.NOT_FOUND}/>
        </Route>
        <Route exact path={ROUTERS.CHAT} render={()=> <Chat/>}/>

        
      </Switch>
    </BrowserRouter>
  );
};
