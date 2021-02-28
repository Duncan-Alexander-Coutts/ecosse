import React, { useRef, useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  Divider,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import classNames from "classnames";
import Logo from "../common/Logo";
import Navigation from "../navigation/Navigation";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "sticky",
    background: "#1f3b66",
  },
  transparentAppBar: {
    backgroundColor: "transparent",
    position: "fixed",
    transition: `background-color ${theme.transitions.duration.short}ms`,
    transitionTimingFunction: theme.transitions.easing.easeIn,
  },
  solidAppBar: {
    backgroundColor: "#1f3b66",
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    background: "transparent",
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slash: {
    marginLeft: theme.spacing(),
  },
  pageTitle: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    marginLeft: theme.spacing(),
  },
}));

const PageHeader = ({ pageTitle, delayBackgroundColour }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [showSolidBackground, setShowSolidBackground] = useState(
    !delayBackgroundColour
  );
  const refElement = useRef(null);

  useScrollPosition(({ currPos }) => {
    if (delayBackgroundColour) {
      currPos.y < refElement.current.clientHeight * -1
        ? setShowSolidBackground(true)
        : setShowSolidBackground(false);
    }
  });

  return (
    <>
      <AppBar
        ref={refElement}
        elevation={showSolidBackground ? 1 : 0}
        className={classNames(classes.appBar, {
          [classes.transparentAppBar]: delayBackgroundColour,
          [classes.solidAppBar]: delayBackgroundColour && showSolidBackground,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <Navigation />
            <Logo hideText={isMobile} />
          </div>
          {pageTitle ? (
            <>
              {!isMobile && (
                <Typography className={classes.slash}>
                  {String.fromCharCode(47)}
                </Typography>
              )}
              <Typography className={classes.pageTitle} variant="h5">
                {pageTitle}
              </Typography>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PageHeader;
