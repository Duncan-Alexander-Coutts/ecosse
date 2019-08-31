import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    textAlign: "center",
    margin: theme.spacing.unit * 2,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit}px`,
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
    padding: theme.spacing.unit,
    left: "50%",
    transform: `translate(-50%, -${theme.spacing.unit * 4}px)`
  }
});

const Feature = props => (
  <div className={props.classes.root}>
    <props.icon className={props.classes.icon} />
    <Typography className={props.classes.title} variant="h6">
      {props.title}
    </Typography>
    <Typography>{props.description}</Typography>
  </div>
);

export default withStyles(styles)(Feature);
