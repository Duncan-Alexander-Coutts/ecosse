import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import EcosseLogo from "../../logo_svg.svg";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const getLocalTheme = theme => ({
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiButton: {
      ...theme.overrides.MuiButton,
      root: {
        ...theme.overrides.MuiButton.root,
        color: "white",
        fontWeight: "bold"
      }
    }
  }
});

const styles = theme => ({
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "absolute"
  },
  toolbar: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    display: "flex",
    justifyContent: "space-between",
    background: "transparent"
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: 50
  },
  title: {
    marginLeft: theme.spacing.unit,
    color: "white",
    fontWeight: "bold"
  }
});

export default withStyles(styles)(props => (
  <MuiThemeProvider
    theme={theme => createMuiTheme({ ...getLocalTheme(theme) })}
  >
    <AppBar className={props.classes.appBar}>
      <Toolbar className={props.classes.toolbar}>
        <div className={props.classes.toolbarLeft}>
          <img
            src={EcosseLogo}
            alt="Ecosse Global fire and water logo"
            className={props.classes.logo}
          />
          <Typography className={props.classes.title} variant="h5">
            Ecosse Global UK
          </Typography>
        </div>
        <div>
          <Button size="large">Home</Button>
          <Button size="large">Services</Button>
          <Button size="large">About Us</Button>
          <Button size="large">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  </MuiThemeProvider>
));
