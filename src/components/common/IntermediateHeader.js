import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { intermediateHeader } from "./styles";

const styles = {
  root: {
    ...intermediateHeader
  }
};

const IntermediateHeader = props => (
  <Typography color="primary" paragraph className={props.classes.root}>
    {props.children}
  </Typography>
);

export default withStyles(styles)(IntermediateHeader);
