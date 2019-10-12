import React from "react";
import {
  Typography,
  withStyles,
  Grid,
  Button,
  withTheme
} from "@material-ui/core";
import Feature from "./Feature";
import BigImage from "../ivan-bandura-PV8D2xTjdVo-unsplash.jpg";
import MainImage from "../42_in_heat_exchanger.jpg";
import PipePressureIntroImage from "../pipe-pressure-intro.png";
import CaissonIntroImage from "../caisson-intro.png";
import RiserIntroImage from "../riser-intro.png";
import ModuleIntroImage from "../module-roof-intro.png";
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
import TitledImagedContent from "./TitledImageContent";
import { intermediateHeader } from "../components/common/styles";

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
  compositeHighlightImage: {
    maxWidth: 400,
    width: "100%",
    height: "auto",
    borderRadius: "50%"
  },
  compositeHighlightDescriptionContainer: {
    maxWidth: 400
  },
  compositeHighlightDescriptionFirstLine: {
    ...intermediateHeader
  },
  compositeHighlightCaseStudiesButtonContainer: {
    marginTop: theme.spacing.unit
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
  },
  coloredHighlightBackground: {
    // backgroundColor: "#3a5c80"
  },
  coloredHighlightText: {
    // color: theme.palette.common.white
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
    <section className={props.classes.compositeHighlights}>
      <TitledImagedContent
        title="Caisson Repair"
        image={CaissonIntroImage}
        imageAlignment="left"
        imageClass={props.classes.compositeHighlightImage}
        backgroundStyle={props.classes.coloredHighlightBackground}
        textStyle={props.classes.coloredHighlightText}
      >
        <div className={props.classes.compositeHighlightDescriptionContainer}>
          <Typography
            paragraph
            className={props.classes.compositeHighlightDescriptionFirstLine}
          >
            Caissons are the arteries of offshore assets and in particular those
            servicing the firewater and dump functions.
          </Typography>
          <Typography paragraph>
            Loss of efficiency due to perforations whether pinholes or large
            anomalies can prove dangerous. In the event of an offshore fire as
            an example where the integral firewater pump has to work harder to
            overcome loss of pumping efficiency. Most of these caissons are
            elderly and are riddled with such anomalies so the race to keep them
            working is now approaching that of critical.
          </Typography>
          <Typography paragraph>
            Ecosse are the first to develop an internal textile reinforcement
            repair which can be deployed from topside instead of having “over
            the side” intervention by divers and rope access technicians. Again
            lightweight in its construction it is gently deployed even into the
            most badly corroded caisson.
          </Typography>
          <div>
            <Typography variant="h6">Case Studies</Typography>
            <Grid
              container
              spacing={props.theme.spacing.unit}
              className={
                props.classes.compositeHighlightCaseStudiesButtonContainer
              }
            >
              <Grid item>
                <Button variant="outlined" color="primary">
                  BP Gulf Rig
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Golden gate
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </TitledImagedContent>
      <TitledImagedContent
        title="Pipe Pressure Repair"
        image={PipePressureIntroImage}
        imageClass={props.classes.compositeHighlightImage}
      >
        <div className={props.classes.compositeHighlightDescriptionContainer}>
          <Typography
            paragraph
            className={props.classes.compositeHighlightDescriptionFirstLine}
          >
            The loss of production due to leaking and structurally weakened
            pipework caused by corrosion and erosion costs the industry
            £Millions annually. Those producing assets nearing their “end of
            life” are especially prone to such issues.
          </Typography>
          <Typography paragraph>
            The application of our composite repair systems helps extend the
            working lives of the assets by replacing the deteriorated steelwork
            with lightweight textile laminations harnessed in a variety of epoxy
            resins to suit a range of situations... even underwater!
          </Typography>
          <Typography paragraph>
            We pride ourselves on being able to offer such solutions to pipework
            which may be leaking to those operating at opposite ends of the
            temperature scale.
          </Typography>
          <div className={props.classes.compositeHightlightButtonContainer}>
            <Typography>Case Studies</Typography>
            <Button variant="outlined" color="primary">
              BP Gulf Rig
            </Button>
            <Button variant="outlined" color="primary">
              Golden Gate Bridge
            </Button>
          </div>
        </div>
      </TitledImagedContent>
      <TitledImagedContent
        title="Deck, Vessel and Module Repair"
        image={ModuleIntroImage}
        imageAlignment="left"
        imageClass={props.classes.compositeHighlightImage}
        backgroundStyle={props.classes.coloredHighlightBackground}
        textStyle={props.classes.coloredHighlightText}
      >
        <div className={props.classes.compositeHighlightDescriptionContainer}>
          <Typography
            paragraph
            className={props.classes.compositeHighlightDescriptionFirstLine}
          >
            Following the same model regarding pipework, structures fall foul of
            corrosion issues too and we can again extend the life of these by
            the addition of our composite repair solutions where deck and module
            roofs, walls, vessels and other areas are found to be unsafe and
            classified as a risk.
          </Typography>
          <Typography paragraph>
            Ecosse composites can repair these areas without the need for
            welding or indeed other “hot work” remedies while at the same time
            provide lightweight solutions in the application of a variety of
            forms i.e. flat layup of composites, panels and pourable grade
            resins to create flat safe and strong structural repair.
          </Typography>
          <Typography paragraph>
            We can also top coat deck and walkway repairs in a variety of
            bespoke epoxy resins into which can be broadcast anti slip media
            such as blast grit or similar.
          </Typography>
        </div>
      </TitledImagedContent>
      <TitledImagedContent
        title="Riser Repair"
        image={RiserIntroImage}
        imageClass={props.classes.compositeHighlightImage}
      >
        <div className={props.classes.compositeHighlightDescriptionContainer}>
          <Typography
            paragraph
            className={props.classes.compositeHighlightDescriptionFirstLine}
          >
            For producing risers in the splashzone, the shutdown of the same is
            not always possible to effect corrosion protection so Ecosse have
            developed their Ecowrap and Ecowrap S for retrofit corrosion
            protection and structural reinforcement in the form of an easy to
            install jacket wrap.
          </Typography>
          <Typography paragraph>
            These are installed by rope access technicians or divers and are
            designed to suit the riser outer diameter with the facility to
            “stack” to any length as required.
          </Typography>
          <Typography paragraph>
            Ecowrap S is a structural version which carries a hydrophobic epoxy
            resin on its inner liner whilst the standard Ecowrap has a
            thixotropic anticorrosion gel and is used for anticorrosion only.
          </Typography>
        </div>
      </TitledImagedContent>
    </section>
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
        description="Our engineered composite systems are in compliance with to validated to the following industry standards: ASME PCC-2, ISO/TS 24817, DNV Type Approval."
      />
      <Grid container>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={AccessTimeOutlined}
            title="No Down Time"
            description="In most cases composites can be installed with no downtime and can be designed as a permanent repair, saving the platform a lot of money."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={WhatshotOutlined}
            title="No Hot Work"
            description="In piping or infrastructure welding repairs, costs associated with hot work can be tremendous and generate their own numerous safety concerns. Composite repairs require no hot work whatsoever."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={TrendingDownOutlined}
            title="No Depressureization"
            description="Repairs on live, hot, pressurised lines save the platform time and money."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={WavesOutlined}
            title="Corrosion Resistent"
            description="The impermeability and high adhesion level of our 100% solids epoxy resin creates the containment barrier, arresting corrosion immediately."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={BlurCircularOutlined}
            title="Compatible with all Piping"
            description="Compatible with Aluminium, GRE, Carbon Steel, PVC, Cast Iron, Polyethylene, Concrete, Polypropylene, Copper, Stainless Steel, Fibreglass, Titanium and many other materials."
          />
        </Grid>
        <Grid xs={6} item sm={4}>
          <Feature
            icon={NatureOutlined}
            title="Economical"
            description="As a repair or reinforcement, composites can cost much less to install when compared to traditional welded sleeve or replacement methods."
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

export default withStyles(styles, { withTheme: true })(CompositesPage);
