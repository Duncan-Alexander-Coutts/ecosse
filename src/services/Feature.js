import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    textAlign: "center",
    margin: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px ${
      theme.spacing(1)
    }px ${theme.spacing(1)}px`,
    position: "relative",
    background: "white",
    borderRadius: 4
  },
  title: {
    fontWeight: "bold"
  },
  icon: {
    background: "white",
    color: "dodgerblue",
    borderRadius: "50%",
    position: "absolute",
    padding: theme.spacing(1),
    left: "50%",
    transform: `translate(-50%, -${theme.spacing(4)}px)`
  }
});

const Feature = props => (
  <div className={props.classes.root}>
    <props.icon className={props.classes.icon} />
    <Typography className={props.classes.title} variant="h6">
      {props.title}
    </Typography>
    <div>{props.children}</div>
  </div>
);

export default withStyles(styles)(Feature);
