import React from "react";

import BigImage from "../../hero.jpg";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
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
    alignItems: "center"
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,.5)",
    width: "100%",
    textAlign: "center"
  }
});

export default withStyles(styles)(props => (
  <div style={{ position: "relative" }}>
    <div className={props.classes.bigImage} />
    <div className={props.classes.overlayContainer}>
      <div className={props.classes.overlay}>
        <Typography style={{ color: "#4c4c4c" }} variant="h3">
          Innovative corrosion solutions
        </Typography>
        <Typography style={{ color: "#4c4c4c" }} variant="h6">
          Some other text that we can see
        </Typography>
      </div>
    </div>
  </div>
));
