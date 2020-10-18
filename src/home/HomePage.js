import React, { useEffect } from "react";
import About from "./about/About";
import Services from "./services/Services";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  services: {
    display: "flex",
    justifyContent: "center",
  },
});

const HomePage = (props) => {
  useEffect(() => props.setPageTitle(""));

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
