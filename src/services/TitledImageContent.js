import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";
import classNames from "classnames";

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  title: {
    marginBottom: theme.spacing.unit * 3,
    fontWeight: "bold"
  },
  contentContainer: { display: "flex", alignItems: "center", height: "100%" }
});

const TitledImagedContent = props => (
  <div className={classNames(props.classes.root, props.backgroundStyle)}>
    <Typography
      className={classNames(props.classes.title, props.textStyle)}
      variant="h4"
      align="center"
      color="primary"
    >
      {props.title}
    </Typography>
    <ImagedContentItem
      imageAlignment={props.imageAlignment}
      imageClass={props.imageClass}
      image={props.image}
    >
      <div
        className={classNames(props.classes.contentContainer, props.textStyle)}
      >
        {props.children}
      </div>
    </ImagedContentItem>
  </div>
);

export default withStyles(styles)(TitledImagedContent);
