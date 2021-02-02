import "./../index.css";
import "./../App.css";
import React from "react";
import PageHeader from "../components/page-header/PageHeader";
import PageFooter from "../components/page-footer/PageFooter";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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

const Layout = ({ children, pageTitle }) => (
  <MuiThemeProvider theme={theme}>
    <div className="page-container">
      <PageHeader pageTitle={pageTitle} />
      {children}
      <PageFooter />
    </div>
  </MuiThemeProvider>
);

export { Layout };
