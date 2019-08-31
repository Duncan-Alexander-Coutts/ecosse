import React from "react";
import { Typography, withStyles, Grid, GridItem } from "@material-ui/core";
import Feature from "./Feature";
import BigImage from "../ivan-bandura-PV8D2xTjdVo-unsplash.jpg";
import MainImage from "../42_in_heat_exchanger.jpg";
import {
  AccessTimeOutlined,
  WhatshotOutlined,
  VerifiedUserOutlined,
  TrendingDownOutlined,
  WavesOutlined,
  NatureOutlined,
  BlurCircularOutlined,
  DoneOutline
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing.unit * 2
  },
  mainImage: {
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${MainImage})`,
    backgroundPositionY: -40,
    width: "100%",
    height: 270
  },
  bold: {
    fontWeight: "bold"
  },
  statement: {
    maxWidth: theme.spacing.unit * 100,
    marginTop: theme.spacing.unit * 2
  },
  keyFeatures: {
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    background: "aliceblue",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${BigImage})`,
    backgroundPositionY: -40
  },
  featuresHeading: {
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.spacing.unit * 4
  },
  feature: {
    textAlign: "center"
  },
  repairSection: {
    paddingTop: theme.spacing.unit * 2
  },
  repairTypes: {
    paddingTop: theme.spacing.unit * 2,
    justifyContent: "space-evenly"
  },
  repairType: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.unit
  },
  repairIcon: {
    color: "dodgerblue",
    marginRight: theme.spacing.unit * 2
  }
});

const CompositesPage = props => (
  <div className={props.classes.root}>
    <Typography className={props.classes.bold} variant="h4">
      Composites
    </Typography>
    {/* <div className={props.classes.mainImage}></div> */}
    <Typography align="center" variant="h6" className={props.classes.statement}>
      Our modern composite repair systems are extremely versatile, adaptable and
      reliable. They have many impressive capabilities that make them an
      attractive alternative to traditional repair or replacement methods.
    </Typography>
    <div className={props.classes.keyFeatures}>
      <Typography
        className={props.classes.featuresHeading}
        variant="h5"
        align="center"
      >
        Key Features
      </Typography>
      <Feature
        icon={VerifiedUserOutlined}
        title="Extensively Tested"
        description="How has this thing been tested. Does it pass some accreditation of some kind?"
      />
      <Grid container>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={AccessTimeOutlined}
            title="No Down Time"
            description="Our approach does a thing that means you can keep working whilst we
          install the thing."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={WhatshotOutlined}
            title="No Hot Work"
            description="We don't weld or do other hot things so it's safer than hot stuff."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={TrendingDownOutlined}
            title="No Depressureization"
            description="The way we do things means that you don't have to de-pressureize."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={WavesOutlined}
            title="Corrosion Resistent"
            description="The material our thing is made of means that it won't rust."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={BlurCircularOutlined}
            title="Compatible with all Piping"
            description="Our thing is made in a way that makes it compatible with all piping, event this really specific one."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={NatureOutlined}
            title="Economical"
            description="The thing we have made is economical because. I can't fill this in."
          />
        </Grid>
      </Grid>
    </div>
    <div className={props.classes.repairSection}>
      <Typography className={props.classes.bold} variant="h5" align="center">
        Repair Types
      </Typography>
      <Typography
        align="center"
        variant="h6"
        className={props.classes.statement}
      >
        There could be some text here that explains a little bit about the
        repair type and some other things that I probably don't understand.
        There could probably be 2 or 3 sentences.
      </Typography>
      <Grid className={props.classes.repairTypes} container>
        <Grid xs={12} item sm={4}>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Abrasian & Wear</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Underwater</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Pipe Bends</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Leaks</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Corrosion Mitigation</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Cracks, Dents, Gouges</Typography>
          </div>
        </Grid>
        <Grid xs={12} item sm={4}>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Encapsulation</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Erosion</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Full Hoop / Axial Strength Replacement</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Isolation / Insulation</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Structural Reinforcement</Typography>
          </div>
          <div className={props.classes.repairType}>
            <DoneOutline className={props.classes.repairIcon} />
            <Typography>Weld Joint / HAZ Reinforcement</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(CompositesPage);
