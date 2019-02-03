import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    background: "#21167a",
    borderRadius: 0,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  }
});

export default withStyles(styles)(props => (
  <Paper className={props.classes.root}>
    <Typography style={{ color: "white" }} variant="title">
      Ecosse Global UK
    </Typography>
  </Paper>
));
