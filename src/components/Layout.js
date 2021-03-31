import "./../index.css";
import React, { useEffect } from "react";
import PageHeader from "../components/page-header/PageHeader";
import PageFooter from "../components/page-footer/PageFooter";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Helmet } from "react-helmet";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d3c66",
    },
    secondary: red,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "2em",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: ".83em",
    },
    h6: {
      fontSize: ".67em",
    },
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

const Layout = ({
  children,
  pageTitle,
  hideInPageTitle,
  delayHeaderBackgroundColour = false,
}) => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="page-container">
        <PageHeader
          pageTitle={!hideInPageTitle ? pageTitle : null}
          delayBackgroundColour={delayHeaderBackgroundColour}
        />
        <div className="page-content">{children}</div>
        <PageFooter />
      </div>
    </MuiThemeProvider>
  );
};

export { Layout };
