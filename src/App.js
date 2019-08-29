import React, { Component } from "react";
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, red, blueGrey } from "@material-ui/core/colors";
import HomePage from "./home/HomePage";
import ServicesPage from "./services/ServicesPage";
import TeamPage from "./team/TeamPage";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: red
  },
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none"
      }
    },
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
          <Route path="/team" component={TeamPage} />
          <PageFooter />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
