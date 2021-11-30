import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { BrowserRouter, Link, Route} from "react-router-dom";
import {Switch} from "@mui/material"
import {Home} from "../Home"
import {Profile} from "../Profile"




export const Router = () =>{


    return (
      <BrowserRouter>
        <ul className="header-manu">
          <li>
            <Link to="/"><HomeOutlinedIcon/></Link>
          </li>
          <li>
            <Link to="/Chat"><LocalPostOfficeOutlinedIcon/></Link>
            </li>
          <li>
            <Link to="/Profile"><PersonIcon/></Link>
          </li>
        </ul>

        <Switch>
          <Route  path="/">
            <Home/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
        </Switch>

        
      </BrowserRouter>
    )
}