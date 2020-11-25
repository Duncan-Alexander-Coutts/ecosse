import React, { useEffect } from "react";

import { Grid, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Feature, FeatureGridItem } from "../../components/feature/Feature";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";
import { Statement } from "../../components/statement/Statement";
import { CONTENT_MAX_WIDTH } from "../../constants";

import BridgeEcoWrap from "../../images/corrosion/bridge-eco-wrap.jpg";
import {
  Snowflake,
  ScrewLag,
  DiameterOutline,
  ShieldStarOutline,
  SafetyGoggles,
  TextureBox,
} from "mdi-material-ui";
import ApplicationsHighlight from "./ApplicationsHighlight";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  contentContainer: {
    maxWidth: CONTENT_MAX_WIDTH,
  },
  highlights: {
    paddingTop: theme.spacing(4),
  },
}));

const carouselItems = [{ image: BridgeEcoWrap, altI18nKey: "Hello there" }];

const CorrosionPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("corrosion.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroCarousel items={carouselItems} />
      <Statement i18nKey="corrosion.intro" />
      <div className={classes.contentContainer}>
        <Grid className={classes.featuresContainer} justify="center" container>
          <FeatureGridItem>
            <Feature
              icon={DiameterOutline}
              i18nKey="corrosion.features.diameter"
            />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature icon={ScrewLag} i18nKey="corrosion.features.flange" />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature
              icon={ShieldStarOutline}
              i18nKey="corrosion.features.active"
            />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature
              icon={SafetyGoggles}
              i18nKey="corrosion.features.inspection"
            />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature
              icon={TextureBox}
              i18nKey="corrosion.features.preparation"
            />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature icon={Snowflake} i18nKey="corrosion.features.cold" />
          </FeatureGridItem>
        </Grid>
        <section className={classes.highlights}>
          <ApplicationsHighlight />
        </section>
      </div>
    </div>
  );
};

export { CorrosionPage };
