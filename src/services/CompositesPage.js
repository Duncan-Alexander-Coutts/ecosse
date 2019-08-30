import React from "react";
import { Typography, withStyles, Grid, GridItem } from "@material-ui/core";
import Feature from "./Feature";
import BigImage from "../hero.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing.unit * 2
  },
  bold: {
    fontWeight: "bold"
  },
  statement: {
    width: theme.spacing.unit * 100,
    marginTop: theme.spacing.unit * 2
  },
  keyFeatures: {
    paddingTop: theme.spacing.unit,
    background: "aliceblue",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${BigImage})`,
    backgroundPositionY: -40
  },
  feature: {
    textAlign: "center"
  }
});

const CompositesPage = props => (
  <div className={props.classes.root}>
    <Typography className={props.classes.bold} variant="h4">
      Composites
    </Typography>
    <Typography align="center" variant="h6" className={props.classes.statement}>
      Our modern composite repair systems are extremely versatile, adaptable and
      reliable. They have many impressive capabilities that make them an
      attractive alternative to traditional repair or replacement methods.
    </Typography>
    <div className={props.classes.keyFeatures}>
      <Typography className={props.classes.bold} variant="h5" align="center">
        Key Features
      </Typography>
      <Grid container>
        <Grid xs={6} item sm={4}>
          <Feature
            title="No Down Time"
            description="Our approach does a thing that means you can keep working whilst we
          install the thing."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            title="No Hot Work"
            description="We don't weld or do other hot things so it's safer than hot stuff."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            title="No Depressureization"
            description="The way we do things means that you don't have to de-pressureize."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            title="Corrosion Resistent"
            description="The material our thing is made of means that it won't rust."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            title="Compatible with all Piping"
            description="Our thing is made in a way that makes it compatible with all piping, event this really specific one."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            title="Economical"
            description="The thing we have made is economical because. I can't fill this in."
          />
        </Grid>
      </Grid>
      <Feature
        title="Extensively Tested"
        description="How has this thing been tested. Does it pass some accreditation of some kind?"
      />
    </div>
  </div>
);

export default withStyles(styles)(CompositesPage);
