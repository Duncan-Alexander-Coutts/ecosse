import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  withStyles
} from "@material-ui/core";

const styles = {
  media: {
    backgroundSize: 125,
    width: 125,
    height: 125,
    margin: "auto"
  },
  mediaContainer: {
    backgroundColor: "#f5f5f5"
  }
};

export default withStyles(styles)(props => (
  <Card>
    <CardActionArea>
      <CardContent>
        <Typography align="center" variant="title" component="h2">
          {props.title}
        </Typography>
      </CardContent>
      <div className={props.classes.mediaContainer}>
        <CardMedia
          className={props.classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
      </div>
      <CardContent>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
));
