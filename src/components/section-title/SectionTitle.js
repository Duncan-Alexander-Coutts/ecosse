import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    "& > hr": {
      flex: 1,
      margin: theme.spacing(0, 6),
    },
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
}));

const SectionTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Divider />
      <Typography color="primary" className={classes.title} variant="h2">
        {title}
      </Typography>
      <Divider />
    </div>
  );
};

export { SectionTitle };
