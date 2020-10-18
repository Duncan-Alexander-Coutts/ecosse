import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "200%",
    position: "absolute",
    zIndex: -1,
  },
  cross: {
    width: "100%",
    height: theme.spacing(50),
    position: "absolute",
    opacity: 0.64,
  },
  crossLeft: {
    backgroundColor: "#1D3C66",
  },
  crossRight: {
    backgroundColor: "#BE1414",
  },
}));

const Saltire = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={`${classes.cross} ${classes.crossLeft}`}></div>
      <div className={`${classes.cross} ${classes.crossRight}`}></div>
    </div>
  );
};

export { Saltire };
