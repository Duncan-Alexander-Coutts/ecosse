import React, { Component, useState } from "react";
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import HomePage from "./home/HomePage";
import TeamPage from "./team/TeamPage";
import CompositesPage from "./services/CompositesPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d3c66"
    },
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

const App = () => {
  const [pageTitle, setPageTitle] = useState("Page Title");

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <PageHeader pageTitle={pageTitle} />
        <Route
          path="/"
          render={() => <HomePage setPageTitle={setPageTitle} />}
          exact
        />
        <Route
          path="/services/composites"
          render={() => <CompositesPage setPageTitle={setPageTitle} />}
        />
        <Route
          path="/team"
          render={() => <TeamPage setPageTitle={setPageTitle} />}
        />
        <PageFooter />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
