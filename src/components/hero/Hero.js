import React from "react";

import BigImage from "../../hero.jpg";
import { withStyles, Typography, Button } from "@material-ui/core";

const styles = theme => ({
  heroContainer: {
    position: "relative"
  },
  bigImage: {
    width: "100%",
    height: 500,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${BigImage})`,
    backgroundPosition: "center",
    boxShadow: theme.shadows[2]
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,0,0,0.2)",
    justifyContent: "center"
  },
  slogan: {
    color: "white",
    fontWeight: "bold",
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(props => (
  <div className={props.classes.heroContainer}>
    <div className={props.classes.bigImage} />
    <div className={props.classes.overlayContainer}>
      <Typography align="center" className={props.classes.slogan} variant="h3">
        Ultimate asset integrity solutions
      </Typography>
    </div>
  </div>
));
