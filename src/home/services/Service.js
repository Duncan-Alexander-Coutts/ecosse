import React from "react";
import { Typography, withStyles, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TitledImageContent from "../../services/TitledImageContent";

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
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2
  },
  descriptionContentContainer: {
    maxWidth: 400,
    display: "flex",
    flexDirection: "column"
  },

  imageClass: {
    maxWidth: 300,
    width: "100%",
    height: "auto",
    borderRadius: "50%"
  }
});

export default withStyles(styles)(props => {
  return (
    <TitledImageContent
      reverseAlignment={props.reverseAlignment}
      invertColors={props.invertColors}
      image={props.image}
      title={props.title}
      imageClass={props.classes.imageClass}
    >
      <div className={props.classes.descriptionContentContainer}>
        <Typography color="primary" variant="h6">
          {props.description}
        </Typography>
        <Button
          component={Link}
          to={props.url}
          color="primary"
          className={props.classes.button}
          variant="outlined"
        >
          Learn more
        </Button>
      </div>
    </TitledImageContent>
  );
});
