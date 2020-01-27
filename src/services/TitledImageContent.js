import React from "react";
import {
  Typography,
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";
import classNames from "classnames";

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold"
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end"
  },
  reverseAlignment: {
    justifyContent: "normal"
  },
  invertedBackground: {
    backgroundColor: theme.palette.primary.main
  }
});

const getInvertedTheme = theme => {
  const blah = {
    ...theme,
    palette: {
      ...theme.palette,
      primary: {
        ...theme.palette.primary,
        main: theme.palette.common.white
      }
    }
  };
  return blah;
};

const TitledImagedContent = props => {
  const getTheme = theme =>
    props.invertColors ? createMuiTheme(getInvertedTheme(theme)) : theme;

  return (
    <MuiThemeProvider theme={theme => getTheme(theme)}>
      <div
        className={classNames(props.classes.root, {
          [props.classes.invertedBackground]: props.invertColors
        })}
      >
        <Typography
          className={props.classes.title}
          variant="h4"
          align="center"
          color="primary"
        >
          {props.title}
        </Typography>
        <ImagedContentItem
          reverseAlignment={props.reverseAlignment}
          imageClass={props.imageClass}
          image={props.image}
        >
          <div
            className={classNames(props.classes.contentContainer, {
              [props.classes.reverseAlignment]: props.reverseAlignment
            })}
          >
            {props.children}
          </div>
        </ImagedContentItem>
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(TitledImagedContent);
