import React from "react";
import classNames from "classnames";

import BigImage from "../../hero.jpg";
import { withStyles, Typography, Grow } from "@material-ui/core";
import { ECOSSE_COLOURS } from "../../constants";

const styles = (theme) => ({
  heroContainer: {
    position: "relative",
  },
  hero: {
    width: "100%",
    height: 138,
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(11),
    },
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${BigImage})`,
    boxShadow: theme.shadows[2],
    backgroundPositionY: -40,
  },
  heroLarge: {
    height: 550,
    backgroundPosition: "center",
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
  },
  slogan: {
    color: "white",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    zIndex: 1,
  },
  polygonContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    opacity: 0.25,
    zIndex: 0,
  },
  polygon: {
    height: "100%",
    flex: 1,
  },
  polygonRed: {
    backgroundColor: ECOSSE_COLOURS.blue,
    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
  },
  polygonBlue: {
    backgroundColor: ECOSSE_COLOURS.red,
    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
  },
});

export default withStyles(styles)((props) => {
  const renderSlogan = () => {
    return (
      <div className={props.classes.overlayContainer}>
        {props.fullHeight && (
          <Grow in={true} timeout={1000}>
            <>
              <Typography
                align="center"
                className={props.classes.slogan}
                variant="h2"
              >
                Ultimate asset integrity solutions
              </Typography>
              <div className={props.classes.polygonContainer}>
                <div
                  className={`${props.classes.polygon} ${props.classes.polygonBlue}`}
                />
                <div
                  className={`${props.classes.polygon} ${props.classes.polygonRed}`}
                />
              </div>
            </>
          </Grow>
        )}
      </div>
    );
  };

  return (
    <div className={props.classes.heroContainer}>
      <div
        className={classNames(props.classes.hero, {
          [props.classes.heroLarge]: props.fullHeight,
        })}
      />
      {renderSlogan()}
    </div>
  );
});
