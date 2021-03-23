import { makeStyles } from "@material-ui/core";
import { Schedule } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  datePosted: {
    marginLeft: theme.spacing(),
  },
}));

const DatePosted = ({ datePosted }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Schedule />
      <div className={classes.datePosted}>{datePosted}</div>
    </div>
  );
};

export { DatePosted };
