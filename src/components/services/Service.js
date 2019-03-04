import React from "react";
import { Typography, withStyles, Grid, Button } from "@material-ui/core";

const styles = theme => ({
  serviceRoot: {
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  image: {
    width: 300
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
    fontWeight: "bold"
  },
  textContentGridItem: {
    display: "flex",
    textAlign: "center",
    alignItems: "center"
  },
  imageContainer: {
    textAlign: "center"
  },
  button: {
    width: 200,
    margin: "auto",
    marginTop: theme.spacing.unit * 4
  },
  descriptionContentContainer: {
    margin: "auto"
  }
});

export default withStyles(styles)(props => {
  function getDirection() {
    return props.imageAlignment === "left" ? "row-reverse" : undefined;
  }

  return (
    <Grid
      className={props.classes.serviceRoot}
      container
      spacing={24}
      direction={getDirection()}
    >
      <Grid item xs={12} sm={6} className={props.classes.textContentGridItem}>
        <div className={props.classes.descriptionContentContainer}>
          <Typography className={props.classes.title} variant="headline">
            {props.title}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {props.description}
          </Typography>
          <Button
            className={props.classes.button}
            variant="outlined"
            color="secondary"
          >
            Learn more
          </Button>
        </div>
      </Grid>
      <Grid className={props.classes.imageContainer} item xs={12} sm={6}>
        <img src={props.image} className={props.classes.image} />
      </Grid>
    </Grid>
  );
});
