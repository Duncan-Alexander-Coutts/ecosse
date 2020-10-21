import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  Fade,
  Divider,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  WhatshotOutlined,
  VerifiedUserOutlined,
  WavesOutlined,
  NatureOutlined,
  BlurCircularOutlined,
  TrendingDown,
} from "@material-ui/icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CaissonHighlight from "./CaissonHighlight";
import PipePressureHighlight from "./PipePressureHighlight";
import ModuleHighlight from "./ModuleHighlight";
import RiserHighlight from "./RiserHighlight";
import Feature from "./Feature";

import Clamp from "./composites/images/16_in_clamp.jpg";
import Exchange from "./composites/images/42_in_heat_exchanger.jpg";
import Cool from "./composites/images/60_in_cooling_water_line.jpg";
import { CONTENT_MAX_WIDTH, FADE_TRANSITION_DURATION } from "../constants";
import { Trans, useTranslation } from "react-i18next";
import { LabeledTick } from "../components/labeled-tick/LabeledTick";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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
  repairSection: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  repairTypes: {
    paddingTop: theme.spacing(2),
    margin: "auto",
    maxWidth: theme.breakpoints.values.sm,
  },
}));

const FeatureGridItem = ({ children }) => (
  <Grid item xs={6} sm={4}>
    {children}
  </Grid>
);

const CompositesPage = (props) => {
  useEffect(() => props.setPageTitle(t("composites.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  const repairTypes = t("composites.repairTypes.items", {
    returnObjects: true,
  });

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div className={classes.root}>
        <Grid justify="center" container>
          <Grid item xs={12} md={10} lg={8}>
            <Carousel showThumbs={false} showStatus={false}>
              <div>
                <img
                  src={Clamp}
                  alt={t("composites.showcaseImages.altText.clamp")}
                />
              </div>
              <div>
                <img
                  src={Exchange}
                  alt={t("composites.showcaseImages.altText.heatExchange")}
                />
              </div>
              <div>
                <img
                  src={Cool}
                  alt={t("composites.showcaseImages.altText.coolingWater")}
                />
              </div>
            </Carousel>
          </Grid>
        </Grid>
        <Typography
          color="primary"
          align="center"
          variant="h6"
          className={classes.statement}
        >
          <Trans i18nKey="composites.intro" />
        </Typography>
        <Divider className={classes.statementDivider} />
        <div className={classes.contentContainer}>
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
          <section className={classes.compositeHighlights}>
            <CaissonHighlight />
            <PipePressureHighlight />
            <ModuleHighlight />
            <RiserHighlight />
          </section>
          <Paper elevation={8} className={classes.repairSection}>
            <Typography
              color="primary"
              className={classes.bold}
              variant="h4"
              align="center"
            >
              {t("composites.repairTypes.header")}
            </Typography>
            <Grid container spacing={1} className={classes.repairTypes}>
              <Grid xs item>
                {repairTypes.slice(0, 6).map((repair) => (
                  <LabeledTick label={repair} />
                ))}
              </Grid>
              <Grid xs item>
                {repairTypes.slice(6, 12).map((repair) => (
                  <LabeledTick label={repair} />
                ))}
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </Fade>
  );
};

export default CompositesPage;
