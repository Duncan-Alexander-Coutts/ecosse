import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

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
  doneIcon: {
    background: "white",
    color: "dodgerblue",
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -27px)"
  }
});

const Feature = props => (
  <div className={props.classes.root}>
    <DoneIcon className={props.classes.doneIcon} />
    <Typography className={props.classes.title} variant="h6">
      {props.title}
    </Typography>
    <Typography>{props.description}</Typography>
  </div>
);

export default withStyles(styles)(Feature);
