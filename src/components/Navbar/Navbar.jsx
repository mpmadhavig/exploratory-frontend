import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Paper } from "@material-ui/core";

import NavbarStyle from "../../assets/css/NavbarStyle";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import LoggedRightMenu from "./Sections/LoggedRightMenu";
import { useSelector } from "react-redux";

import Tab from "../Tab";

//the styles are from NavbarStyle
export default function Navbar(props) {

  const classes = NavbarStyle();
  const user = useSelector(state => state.user)
  
  if (user.userData && !user.userData.isAuth) {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="sticky">
          <Toolbar>
            <a href="/">
              <img src="/logo.png" alt="logo" className={classes.logo} />
            </a>
            <LeftMenu />
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            ></Typography>
            <RightMenu />
            <Paper />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  else{
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="sticky">
          <Toolbar>
            <a href="/">
              <img src="/logo.png" alt="logo" className={classes.logo} />
            </a>
            <LeftMenu />
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            ></Typography>
            <LoggedRightMenu />
            <Paper />
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  
}
