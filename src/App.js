import React, { Component } from "react";
import PageHeader from "./components/page-header/PageHeader";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import { withStyles } from "@material-ui/core";
import PageFooter from "./components/page-footer/PageFooter";

const styles = theme => ({
  appContent: {
    marginTop: 85
  },
  services: {
    marginTop: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <div className={this.props.classes.appContent}>
          <Hero />
          <div className={this.props.classes.services}>
            <Services />
          </div>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
