import React, { useRef, useState } from "react";
import {
  withStyles,
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  Grid,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import Hero from "../hero/Hero";
import Logo from "../common/Logo";
import MobileNavigation from "../navigation/MobileNavigation";
import DesktopNavigation from "../navigation/DesktopNavigation";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const styles = (theme) => ({
  appBar: {
    position: "sticky",
    background: "#1f3b66",
  },
  appBarHome: {
    backgroundColor: "transparent",
    position: "fixed",
    transition: `background-color ${theme.transitions.duration.short}ms`,
    transitionTimingFunction: theme.transitions.easing.easeIn,
  },
  appBarHomeSolid: {
    backgroundColor: "#1f3b66",
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    background: "transparent",
  },
  toolbarGrid: {
    alignItems: "center",
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitleContainer: {
    textAlign: "center",
    marginRight: theme.spacing(),
  },
  pageTitle: {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
});

export default withRouter(
  withStyles(styles)((props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const isHome = props.location.pathname === "/";
    const [showSolidBackground, setShowSolidBackground] = useState(
      isHome ? false : true
    );
    const refElement = useRef(null);

    useScrollPosition(({ currPos }) => {
      if (isHome) {
        currPos.y < refElement.current.clientHeight * -1
          ? setShowSolidBackground(true)
          : setShowSolidBackground(false);
      }
    });

    return (
      <>
        <AppBar
          ref={refElement}
          elevation={isHome ? 0 : 1}
          className={classNames(props.classes.appBar, {
            [props.classes.appBarHome]: isHome,
            [props.classes.appBarHomeSolid]: isHome && showSolidBackground,
          })}
        >
          <Toolbar className={props.classes.toolbar}>
            <Grid className={props.classes.toolbarGrid} container>
              <Grid xs={2} sm={12} item className={props.classes.toolbarLeft}>
                <div className={props.classes.toolbarLeft}>
                  {isMobile && <MobileNavigation />}
                  <Logo hideText={isMobile} />
                </div>
                {!isMobile && <DesktopNavigation />}
              </Grid>
              <Grid xs={10} sm={12} item>
                <div className={props.classes.pageTitleContainer}>
                  <Typography className={props.classes.pageTitle} variant="h3">
                    {props.pageTitle}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {isHome && <Hero />}
      </>
    );
  })
);
