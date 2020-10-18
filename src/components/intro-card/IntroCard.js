import {
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  image: {
    width: 300,
    marginBottom: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(2),
  },
}));

const IntroCard = ({ header, image, imageAlt, description }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader className={classes.header} title={header} />
      <CardContent className={classes.content}>
        <img className={classes.image} src={image} alt={imageAlt} />
        <Button color="primary" title="More" variant="outlined">
          More
        </Button>
        <Typography color="primary" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { IntroCard };
