import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  imageContainer: {
    textAlign: "center"
  },
  image: {
    width: 300,
    borderRadius: "50%"
  }
});

const ImagedContentItem = props => {
  function getDirection() {
    return props.imageAlignment === "left" ? "row-reverse" : undefined;
  }

  return (
    <Grid className={props.classes.root} container direction={getDirection()}>
      <Grid item xs={12} sm={6} className={props.classes.textContentGridItem}>
        {props.children}
      </Grid>
      <Grid className={props.classes.imageContainer} item xs={12} sm={6}>
        <img src={props.image} className={props.classes.image} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ImagedContentItem);
