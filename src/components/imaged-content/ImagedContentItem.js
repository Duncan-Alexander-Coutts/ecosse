import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import classNames from "classnames";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  imageContainer: {
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    alignItems: "center"
  },
  imageLeftAligned: {
    justifyContent: "flex-end"
  }
});

const ImagedContentItem = props => {
  const getDirection = () => {
    return props.reverseAlignment ? "row-reverse" : undefined;
  };

  const getImageAlignmentClass = () =>
    props.reverseAlignment ? props.classes.imageLeftAligned : undefined;

  return (
    <Grid
      spacing={32}
      className={props.classes.root}
      container
      direction={getDirection()}
      justify="center"
    >
      <Grid item s={12} sm={6} className={props.classes.textContentGridItem}>
        {props.children}
      </Grid>
      <Grid
        className={classNames(
          props.classes.imageContainer,
          getImageAlignmentClass()
        )}
        item
        s={12}
        sm={6}
      >
        <img src={props.image} className={props.imageClass} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ImagedContentItem);
