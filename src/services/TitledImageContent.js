import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit * 3
  }
});

const TitledImagedContent = props => (
  <div>
    <Typography className={props.classes.title} variant="h4" align="center">
      {props.title}
    </Typography>
    <ImagedContentItem
      imageAlignment={props.imageAlignment}
      imageClass={props.imageClass}
      image={props.image}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Typography variant="body1">{props.children}</Typography>
      </div>
    </ImagedContentItem>
  </div>
);

export default withStyles(styles)(TitledImagedContent);
