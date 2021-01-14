import React, { useState } from "react";
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import HomePage from "./home/HomePage";
import TeamPage from "./team/TeamPage";
import CompositesPage from "./services/composites/CompositesPage";
import FireAndBlastPage from "./services/fire-and-blast/FireAndBlastPage";
import { ScrollToTop } from "./components/scroll-to-top/ScrollToTop";
import { SealantsPage } from "./services/sealants/SealantsPage";
import { CorrosionPage } from "./services/corrosion/CorrosionPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d3c66",
    },
    secondary: red,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  overrides: {
    MuiCardHeader: {
      title: {
        fontWeight: "bold",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#1d3c66",
      },
    },
  },
});

const App = () => {
  const [pageTitle, setPageTitle] = useState("Page Title");

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <ScrollToTop />
          <PageHeader pageTitle={pageTitle} />
          <div>
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
              path="/services/fireandblast"
              render={() => <FireAndBlastPage setPageTitle={setPageTitle} />}
            />
            <Route
              path="/services/sealants"
              render={() => <SealantsPage setPageTitle={setPageTitle} />}
            />
            <Route
              path="/services/corrosion"
              render={() => <CorrosionPage setPageTitle={setPageTitle} />}
            />
            <Route
              path="/team"
              render={() => <TeamPage setPageTitle={setPageTitle} />}
            />
          </div>
          <PageFooter />
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
