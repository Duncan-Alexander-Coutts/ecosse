import React, { useEffect } from "react";
import { Typography, withStyles, Grid, Fade, Divider } from "@material-ui/core";
import {
  WhatshotOutlined,
  VerifiedUserOutlined,
  WavesOutlined,
  NatureOutlined,
  BlurCircularOutlined,
  DoneOutline,
  TrendingDown,
} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CaissonHighlight from "./CaissonHighlight";
import PipePressureHighlight from "./PipePressureHighlight";
import ModuleHighlight from "./ModuleHighlight";
import RiserHighlight from "./RiserHighlight";
import Feature from "./Feature";

import MainImage from "../42_in_heat_exchanger.jpg";
import Clamp from "./composites/images/16_in_clamp.jpg";
import Exchange from "./composites/images/42_in_heat_exchanger.jpg";
import Cool from "./composites/images/60_in_cooling_water_line.jpg";
import { CONTENT_MAX_WIDTH, FADE_TRANSITION_DURATION } from "../constants";
import { Trans } from "react-i18next";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  mainImage: {
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundImage: `url(${MainImage})`,
    backgroundPositionY: -40,
    width: "100%",
    height: 270,
  },
  bold: {
    fontWeight: "bold",
  },
  statement: {
    maxWidth: theme.spacing(100),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  statementDivider: {
    width: theme.spacing(50),
  },
  contentContainer: {
    maxWidth: CONTENT_MAX_WIDTH,
  },
  compositeHighlights: {
    paddingTop: theme.spacing(4),
    width: "100%",
  },
  featuresHeading: {
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.spacing(4),
  },
  feature: {
    textAlign: "center",
  },
  repairSection: {
    paddingTop: theme.spacing(2),
  },
  repairTypes: {
    paddingTop: theme.spacing(2),
    justifyContent: "space-evenly",
  },
  repairType: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  repairIcon: {
    color: green[500],
    marginRight: theme.spacing(2),
  },
  featureContainer: {
    display: "flex",
  },
});

const FeatureGridItem = ({ children }) => (
  <Grid item xs={6} sm={4}>
    {children}
  </Grid>
);

const CompositesPage = (props) => {
  useEffect(() => props.setPageTitle("Composites"));

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div className={props.classes.root}>
        <Grid justify="center" container>
          <Grid item xs={12} md={10} lg={8}>
            <Carousel showThumbs={false} showStatus={false}>
              <div>
                <img src={Clamp} alt="Clamp type composite repair" />
              </div>
              <div>
                <img src={Exchange} alt="Heat exchanger composite repair" />
              </div>
              <div>
                <img src={Cool} alt="Cooling water line composite repair" />
              </div>
            </Carousel>
          </Grid>
        </Grid>
        <Typography
          color="primary"
          align="center"
          variant="h6"
          className={props.classes.statement}
        >
          <Trans i18nKey="composites.intro" />
        </Typography>
        <Divider className={props.classes.statementDivider} />
        <div className={props.classes.contentContainer}>
          <Grid container>
            <FeatureGridItem>
              <Feature
                icon={TrendingDown}
                i18nKey="composites.features.noDownTime"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={WhatshotOutlined}
                i18nKey="composites.features.noHotWork"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={VerifiedUserOutlined}
                i18nKey="composites.features.extensivelyTested"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={WavesOutlined}
                i18nKey="composites.features.corrosionResistent"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={BlurCircularOutlined}
                i18nKey="composites.features.pipingCompatibility"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={NatureOutlined}
                i18nKey="composites.features.economical"
              />
            </FeatureGridItem>
          </Grid>
          <section className={props.classes.compositeHighlights}>
            <CaissonHighlight />
            <PipePressureHighlight />
            <ModuleHighlight />
            <RiserHighlight />
          </section>
          <div className={props.classes.repairSection}>
            <Typography
              color="primary"
              className={props.classes.bold}
              variant="h5"
              align="center"
            >
              Repair Types
            </Typography>
            <Typography
              align="center"
              variant="h6"
              className={props.classes.statement}
              color="primary"
            >
              There could be some text here that explains a little bit about the
              repair type and some other things that I probably don't
              understand. There could probably be 2 or 3 sentences.
            </Typography>
            <Grid container spacing={1} className={props.classes.repairTypes}>
              <Grid xs item>
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
              <Grid xs item>
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
                  <Typography>
                    Full Hoop / Axial Strength Replacement
                  </Typography>
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
      </div>
    </Fade>
  );
};

export default withStyles(styles, { withTheme: true })(CompositesPage);
