import React, { Component } from "react";
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import HomePage from "./home/HomePage";
import ServicesPage from "./services/ServicesPage";

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
        <Router>
          <PageHeader />
          <Route path="/" component={HomePage} exact />
          <Route path="/services" component={ServicesPage} />
          <PageFooter />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
