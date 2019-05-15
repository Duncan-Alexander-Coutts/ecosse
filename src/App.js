import React, { Component } from "react";
import PageHeader from "./components/page-header/PageHeader";
import Hero from "./components/hero/Hero";
import Services from "./home/services/Services";
import { withStyles } from "@material-ui/core";
import PageFooter from "./components/page-footer/PageFooter";
import About from "./home/about/About";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import HomePage from "./home/HomePage";

const theme = createMuiTheme({
  palette: {
    secondary: red
  },
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <PageHeader />
          <div>
            <HomePage />
          </div>
          <PageFooter />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
