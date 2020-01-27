import React from "react";
import { withStyles, Typography, Button, Fade, AppBar, Toolbar } from "@material-ui/core";

import EcosseLogo from "../../logo_svg.svg";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import Hero from "../hero/Hero";
import SimpleMenu from "../navigation/SimpleMenu";

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
    paddingTop: theme.spacing(1),
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
  companyName: {
    marginLeft: theme.spacing(1),
    color: theme.palette.common.white,
    fontWeight: "bold"
  },
  pageTitleContainer: {
    textAlign: "center"
  },
  pageTitle: {
    color: theme.palette.common.white,
    fontWeight: "bold"
  }
});

export default withRouter(
  withStyles(styles)(props => {
    return (
      <MuiThemeProvider
        theme={theme => createMuiTheme({ ...getLocalTheme(theme) })}
      >
        <React.Fragment>
          <Fade in={true} timeout={1000}>
            <AppBar className={props.classes.appBar}>
              <Toolbar className={props.classes.toolbar}>
                <div className={props.classes.toolbarLeft}>
                  <img
                    src={EcosseLogo}
                    alt="Ecosse Global fire and water logo"
                    className={props.classes.logo}
                  />
                  <Typography
                    className={props.classes.companyName}
                    variant="h5"
                  >
                    Ecosse Global UK
                  </Typography>
                </div>
                <div>
                  <Button component={Link} to="/" size="large">
                    Home
                  </Button>
                  <SimpleMenu />
                  <Button component={Link} to="/team" size="large">
                    Team
                  </Button>
                  <Button size="large">Contact</Button>
                </div>
              </Toolbar>
              <div className={props.classes.pageTitleContainer}>
                <Typography className={props.classes.pageTitle} variant="h3">
                  {props.pageTitle}
                </Typography>
              </div>
            </AppBar>
          </Fade>
          <Hero fullHeight={props.location.pathname === "/"} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  })
);
