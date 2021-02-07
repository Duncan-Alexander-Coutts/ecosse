import React from "react";
import About from "../components/home-page/about/About";
import Services from "../components/home-page/services/Services";
import { withStyles } from "@material-ui/core";
import { Layout } from "../components/Layout";
import Hero from "../components/hero/Hero";

const styles = () => ({
  services: {
    display: "flex",
    justifyContent: "center",
  },
});

const HomePage = (props) => {
  return (
    <Layout delayHeaderBackgroundColour>
      <Hero />
      <About />
      <div className={props.classes.services}>
        <Services />
      </div>
    </Layout>
  );
};

export default withStyles(styles)(HomePage);
