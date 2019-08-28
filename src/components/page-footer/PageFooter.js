import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import Achilles from "../../svg/achilles.svg";
import CompositesBadge from "../../svg/composites-badge.svg";
import DnvGl from "../../svg/dnvgl.svg";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    background: "#4d4b5a",
    borderRadius: 0,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  },
  badgeContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 2,
    flexWrap: "wrap"
  },
  achilles: {
    width: 144,
    height: 91
  }
});

export default withStyles(styles)(props => (
  <React.Fragment>
    <div className={props.classes.badgeContainer}>
      <img className={props.classes.achilles} src={Achilles} />
      <img className={props.classes.achilles} src={DnvGl} />
      <img className={props.classes.achilles} src={CompositesBadge} />
    </div>
    <Paper className={props.classes.root}>
      <Typography style={{ color: "white" }} variant="title">
        Ecosse Global UK
      </Typography>
    </Paper>
  </React.Fragment>
));
