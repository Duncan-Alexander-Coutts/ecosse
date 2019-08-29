import React from "react";
import About from "./about/About";
import Services from "./services/Services";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  services: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px 0 ${theme
      .spacing.unit * 2}px`,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ececec"
  }
});

const HomePage = props => {
  return (
    <>
      <About />
      <div className={props.classes.services}>
        <Services />
      </div>
    </>
  );
};

export default withStyles(styles)(HomePage);
