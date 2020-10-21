import { makeStyles, Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React from "react";
import { ECOSSE_COLOURS } from "../../constants";

const useStyles = makeStyles((theme) => ({
  repairType: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  repairIcon: {
    color: ECOSSE_COLOURS.green,
    marginRight: theme.spacing(2),
  },
}));

const LabeledTick = ({ label }) => {
  const classes = useStyles();
  return (
    <div className={classes.repairType}>
      <CheckCircle className={classes.repairIcon} />
      <Typography>{label}</Typography>
    </div>
  );
};

export { LabeledTick };
