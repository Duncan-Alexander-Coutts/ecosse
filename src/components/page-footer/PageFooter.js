import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import Achilles from "../../svg/achilles.svg";
import CompositesBadge from "../../svg/composites-badge.svg";
import DnvGl from "../../svg/dnvgl.svg";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    borderRadius: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: "center"
  },
  badgeContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    flexWrap: "wrap"
  },
  achilles: {
    width: 144,
    height: 91
  },
  copyright: {
    color: theme.palette.common.white
  }
});

export default withStyles(styles)(props => (
  <>
    <div className={props.classes.badgeContainer}>
      <img className={props.classes.achilles} src={Achilles} alt="Achilles logo" />
      <img className={props.classes.achilles} src={DnvGl} alt="DNV GL logo" />
      <img className={props.classes.achilles} src={CompositesBadge} alt="DNV GL logo" />
    </div>
    <Paper className={props.classes.root}>
      <Typography className={props.classes.copyright}>
        Ecosse Global UK
      </Typography>
    </Paper>
  </>
));
