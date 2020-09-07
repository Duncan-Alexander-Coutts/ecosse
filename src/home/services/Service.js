import React from "react";
import { Link } from "react-router-dom";
import TitledImageContent from "../../services/TitledImageContent";
import { Typography, Button, withStyles } from "@material-ui/core";
import { withFadeIn } from "../../components/higher-order/withFadeIn";

const styles = theme => ({
  serviceRoot: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  image: {
    width: 300
  },
  title: {
    marginBottom: theme.spacing(2),
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
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

export default withFadeIn(withStyles(styles)(props => {
  return <div>
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
  </div>
}));
