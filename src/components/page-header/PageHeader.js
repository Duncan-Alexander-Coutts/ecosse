import React from "react";
import {
  withStyles,
  Typography,
  Fade,
  AppBar,
  Toolbar,
  useMediaQuery,
  Grid
} from "@material-ui/core";

import {
  MuiThemeProvider,
  createMuiTheme,
  useTheme
} from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Hero from "../hero/Hero";
import Logo from "../common/Logo";
import MobileNavigation from "../navigation/MobileNavigation";
import DesktopNavigation from "../navigation/DesktopNavigation";
import { FADE_TRANSITION_DURATION } from "../../constants";

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
  toolbarGrid: {
    alignItems: "center"
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  pageTitleContainer: {
    textAlign: "center",
    marginRight: theme.spacing()
  },
  pageTitle: {
    color: theme.palette.common.white,
    fontWeight: "bold"
  }
});

export default withRouter(
  withStyles(styles)(props => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
      <MuiThemeProvider
        theme={theme => createMuiTheme({ ...getLocalTheme(theme) })}
      >
        <React.Fragment>
          <Fade in timeout={FADE_TRANSITION_DURATION}>
            <AppBar className={props.classes.appBar}>
              <Toolbar className={props.classes.toolbar}>
                <Grid className={props.classes.toolbarGrid} container>
                  <Grid
                    xs={2}
                    sm={12}
                    item
                    className={props.classes.toolbarLeft}
                  >
                    <div className={props.classes.toolbarLeft}>
                      {isMobile && <MobileNavigation />}
                      <Logo hideText={isMobile} />
                    </div>
                    <div>{!isMobile && <DesktopNavigation />}</div>
                  </Grid>
                  <Grid xs={10} sm={12} item>
                    <div className={props.classes.pageTitleContainer}>
                      <Typography
                        className={props.classes.pageTitle}
                        variant="h3"
                      >
                        {props.pageTitle}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Fade>
          <Hero fullHeight={props.location.pathname === "/"} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  })
);
