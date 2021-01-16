import React, { useEffect } from "react";
import { Typography, Grid, Fade, Paper, makeStyles } from "@material-ui/core";
import {
  WhatshotOutlined,
  VerifiedUserOutlined,
  WavesOutlined,
  NatureOutlined,
  BlurCircularOutlined,
  TrendingDown,
} from "@material-ui/icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CaissonHighlight from "./CaissonHighlight";
import PipePressureHighlight from "./PipePressureHighlight";
import ModuleHighlight from "./ModuleHighlight";
import RiserHighlight from "./RiserHighlight";

import Clamp from "../../images/composites/clamp.jpg";
import Exchange from "../../images/composites/heat_exchanger.jpg";
import Cool from "../../images/composites/cooling_water_line.jpg";
import { CONTENT_MAX_WIDTH, FADE_TRANSITION_DURATION } from "../../constants";
import { useTranslation } from "react-i18next";
import { LabeledTick } from "../../components/labeled-tick/LabeledTick";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";
import { Statement } from "../../components/statement/Statement";
import { Feature, FeatureGridItem } from "../../components/feature/Feature";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  bold: {
    fontWeight: "bold",
  },
  contentContainer: {
    maxWidth: CONTENT_MAX_WIDTH,
    position: "relative",
  },
  highlights: {
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

const carouselItems = [
  { image: Clamp, altI18nKey: "composites.showcaseImages.altText.clamp" },
  {
    image: Exchange,
    altI18nKey: "composites.showcaseImages.altText.heatExchange",
  },
  { image: Cool, altI18nKey: "composites.showcaseImages.altText.coolingWater" },
];

const CompositesPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("composites.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  const repairTypes = t("composites.repairTypes.items", {
    returnObjects: true,
  });

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div className={classes.root}>
        <HeroCarousel items={carouselItems} />
        <Statement i18nKey="composites.intro" />
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
                i18nKey="composites.features.corrosionResistant"
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
          <section className={classes.highlights}>
            <CaissonHighlight />
            <PipePressureHighlight />
            <ModuleHighlight />
            <RiserHighlight />
          </section>
          <Paper elevation={0} className={classes.repairSection}>
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
                  <LabeledTick key={repair} label={repair} />
                ))}
              </Grid>
              <Grid xs item>
                {repairTypes.slice(6, 12).map((repair) => (
                  <LabeledTick key={repair} label={repair} />
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
