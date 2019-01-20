import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import EcosseLogo from "../../logo_svg.svg";
import BigImage from "../../Zmrw80Dm.jpeg";

const styles = theme => ({
  toolbar: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    display: "flex",
    justifyContent: "space-between",
    background: "white"
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: 50
  },
  title: {
    marginLeft: theme.spacing.unit
  },
  bigImage: {
    width: "100%",
    height: 500,
    backgroundRepeat: "none",
    backgroundImage: `url(${BigImage})`
  }
});

export default withStyles(styles)(props => (
  <header className="App-header">
    <AppBar position="static">
      <Toolbar className={props.classes.toolbar}>
        <div className={props.classes.toolbarLeft}>
          <img
            src={EcosseLogo}
            alt="Ecosse Global fire and water logo"
            className={props.classes.logo}
          />
          <Typography className={props.classes.title} variant="title">
            Ecosse Global UK
          </Typography>
        </div>
        %
        <div>
          <Button>Home</Button>
          <Button>Services</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
    <div style={{ position: "relative" }}>
      <div className={props.classes.bigImage} />
      <div
        style={{
          position: "absolute",
          bottom: "50%",
          width: "50%",
          left: "50%",
          backgroundColor: "rgba(127,127,127,0.5)"
        }}
      >
        Some slogan here about the company
      </div>
    </div>
  </header>
));
