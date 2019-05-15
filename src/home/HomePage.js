import React from "react";
import Hero from "../components/hero/Hero";
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
      <Hero />
      <About />
      <div className={props.classes.services}>
        <Services />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomePage);
