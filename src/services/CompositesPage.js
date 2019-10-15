import React from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
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
import CaissonHighlight from "./CaissonHighlight";
import PipePressureHighlight from "./PipePressureHighlight";
import ModuleHighlight from "./ModuleHighlight";
import RiserHighlight from "./RiserHighlight";

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
  compositeHighlights: {
    paddingTop: theme.spacing.unit * 4
  },
  keyFeatures: {
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    background: "#486d8c"
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
    <Typography color="primary" className={props.classes.bold} variant="h4">
      Composites
    </Typography>
    <Typography
      color="primary"
      align="center"
      variant="h6"
      className={props.classes.statement}
    >
      Our modern composite repair systems are extremely versatile, adaptable and
      reliable. They have many impressive capabilities that make them an
      attractive alternative to traditional repair or replacement methods.
    </Typography>
    <section className={props.classes.compositeHighlights}>
      <CaissonHighlight />
      <PipePressureHighlight />
      <ModuleHighlight />
      <RiserHighlight />
    </section>
    <div className={props.classes.keyFeatures}>
      <Typography
        className={props.classes.featuresHeading}
        variant="h4"
        align="center"
      >
        Key Features
      </Typography>
      <Feature icon={VerifiedUserOutlined} title="Extensively Tested">
        <Typography>
          Our engineered composite systems are in compliance with to validated
          to the following industry standards:
          <strong>ASME PCC-2, ISO/TS 24817, DNV Type </strong>Approval.
        </Typography>
      </Feature>
      <Grid container>
        <Grid xs={6} item sm={4}>
          <Feature icon={AccessTimeOutlined} title="No Down Time">
            <Typography>
              In most cases composites can be installed with no downtime and can
              be designed as a permanent repair, saving the platform a lot of
              money.
            </Typography>
          </Feature>
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature icon={WhatshotOutlined} title="No Hot Work">
            <Typography>
              In piping or infrastructure welding repairs, costs associated with
              hot work can be tremendous and generate their own numerous safety
              concerns. Composite repairs require no hot work whatsoever.
            </Typography>
          </Feature>
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature icon={TrendingDownOutlined} title="No Depressureization">
            <Typography>
              Repairs on live, hot, pressurised lines save the platform time and
              money.
            </Typography>
          </Feature>
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature icon={WavesOutlined} title="Corrosion Resistent">
            <Typography>
              The impermeability and high adhesion level of our 100% solids
              epoxy resin creates the containment barrier, arresting corrosion
              immediately.
            </Typography>
          </Feature>
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={BlurCircularOutlined}
            title="Compatible with all Piping"
          >
            <Typography>
              Compatible with Aluminium, GRE, Carbon Steel, PVC, Cast Iron,
              Polyethylene, Concrete, Polypropylene, Copper, Stainless Steel,
              Fibreglass, Titanium and many other materials.
            </Typography>
          </Feature>
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature icon={NatureOutlined} title="Economical">
            <Typography>
              As a repair or reinforcement, composites can cost much less to
              install when compared to traditional welded sleeve or replacement
              methods.
            </Typography>
          </Feature>
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

export default withStyles(styles, { withTheme: true })(CompositesPage);
