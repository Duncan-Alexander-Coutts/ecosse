import React from "react";
import About from "./about/About";
import Services from "./services/Services";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  services: {
    marginTop: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
    display: "flex",
    justifyContent: "center"
  }
});

const HomePage = props => {
  return (
    <React.Fragment>
      <About />
      <div className={props.classes.services}>
        <Services />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomePage);
