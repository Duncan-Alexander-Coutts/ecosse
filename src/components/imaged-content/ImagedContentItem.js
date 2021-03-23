import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  contentContainer: {
    display: "flex",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  imageContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const ImagedContentItem = (props) => {
  const getDirection = () => {
    return props.reverseAlignment ? "row-reverse" : undefined;
  };

  return (
    <Grid
      spacing={4}
      className={props.classes.root}
      container
      direction={getDirection()}
      justify="center"
    >
      <Grid className={props.classes.imageContainer} item s={12} sm={6}>
        <Typography
          color="primary"
          variant="h2"
          className={props.classes.title}
        >
          {props.title}
        </Typography>
        <img
          src={props.image}
          alt={props.imageAlt}
          className={props.imageClass}
        />
      </Grid>
      <Grid item s={12} sm={6} className={props.classes.contentContainer}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ImagedContentItem);
