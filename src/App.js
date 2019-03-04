import React, { Component } from "react";
import PageHeader from "./components/page-header/PageHeader";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import { withStyles } from "@material-ui/core";
import PageFooter from "./components/page-footer/PageFooter";
import About from "./components/about/About";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: red
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
});

const styles = theme => ({
  appContent: {},
  services: {
    marginTop: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
    display: "flex",
    justifyContent: "center"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <PageHeader />
          <div className={this.props.classes.appContent}>
            <Hero />
            <About />
            <div className={this.props.classes.services}>
              <Services />
            </div>
            <PageFooter />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
