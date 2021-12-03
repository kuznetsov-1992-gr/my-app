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

export const Router = () => {
  return (
    <BrowserRouter>
      <ul className="header-manu">
        <li>
          <Link to={ROUTERS.CHAT}>
            <LocalPostOfficeOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link to={ROUTERS.PROFILE}>
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to={ROUTERS.HOME}>
            <HomeOutlinedIcon />
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={ROUTERS.HOME} render={()=> <Home/>}>
          {/* <Home /> */}
        </Route>
        <Route exact path={ROUTERS.CHAT}>
          <Chat/>
        </Route>
        <Route exact path={ROUTERS.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTERS.NOT_FOUND}>ERROR 404</Route>
        <Route>
          <Redirect to={ROUTERS.NOT_FOUND}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
