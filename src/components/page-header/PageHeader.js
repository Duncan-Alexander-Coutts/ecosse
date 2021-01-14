import React, { useRef, useState } from "react";
import { Typography, AppBar, Toolbar, useMediaQuery } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import classNames from "classnames";
import Hero from "../hero/Hero";
import Logo from "../common/Logo";
import MobileNavigation from "../navigation/MobileNavigation";
import DesktopNavigation from "../navigation/DesktopNavigation";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
}));

const PageHeader = ({ pageTitle }) => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isHome = location.pathname === "/";
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
        className={classNames(classes.appBar, {
          [classes.appBarHome]: isHome,
          [classes.appBarHomeSolid]: isHome && showSolidBackground,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            {isMobile && <MobileNavigation />}
            <Logo hideText={isMobile} />
          </div>
          <Typography className={classes.pageTitle} variant="h5">
            {pageTitle}
          </Typography>
          {!isMobile && <DesktopNavigation />}
        </Toolbar>
      </AppBar>
      {isHome && <Hero />}
    </>
  );
};

export default PageHeader;
