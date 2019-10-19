import React from "react";
import classNames from "classnames";

import BigImage from "../../hero.jpg";
import { withStyles, Typography, Grow } from "@material-ui/core";

const styles = theme => ({
  heroContainer: {
    position: "relative"
  },
  hero: {
    width: "100%",
    height: 138,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${BigImage})`,
    boxShadow: theme.shadows[2],
    backgroundPositionY: -40
  },
  heroLarge: {
    height: 550,
    backgroundPosition: "center"
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
    justifyContent: "center"
  },
  slogan: {
    color: "white",
    fontWeight: "bold",
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(props => {
  const renderSlogan = () => {
    return (
      <div className={props.classes.overlayContainer}>
        {props.fullHeight && (
          <Grow in={true} timeout={1000}>
            <Typography
              align="center"
              className={props.classes.slogan}
              variant="h2"
            >
              Ultimate asset integrity solutions
            </Typography>
          </Grow>
        )}
      </div>
    );
  };

  return (
    <div className={props.classes.heroContainer}>
      <div
        className={classNames(props.classes.hero, {
          [props.classes.heroLarge]: props.fullHeight
        })}
      />
      {renderSlogan()}
    </div>
  );
});
