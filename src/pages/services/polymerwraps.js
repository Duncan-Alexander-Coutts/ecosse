import React from "react";
import { Grid, makeStyles, Paper, Typography, Link } from "@material-ui/core";
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
import ApplicationsHighlight from "../../components/ecowrap-page/ApplicationsHighlight";
import InstallationsHighlight from "../../components/ecowrap-page/InstallationsHighlight";
import VariantsHighlight from "../../components/ecowrap-page/VariantsHighlight";
import { Layout } from "../../components/Layout";

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
    paddingTop: theme.spacing(2),
  },
  otherAntiCorrosionContainer: {
    "& > hr": {
      marginBottom: theme.spacing(2),
    },
  },
  otherAntiCorrosionContent: {
    padding: theme.spacing(2),
    "& > p": {
      maxWidth: theme.spacing(62),
      margin: "auto",
      textAlign: "center",
    },
  },
}));

const carouselItems = [{ image: BridgeEcoWrap, altI18nKey: "Hello there" }];

const PolymerWrapsPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Layout pageTitle={t("corrosion.pageHeader")}>
      <div className={classes.root}>
        <HeroCarousel items={carouselItems} />
        <Statement i18nKey="corrosion.intro" />
        <div className={classes.contentContainer}>
          <Grid
            className={classes.featuresContainer}
            justify="center"
            container
          >
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
          <div className={classes.otherAntiCorrosionContainer}>
            <Paper elevation={0} className={classes.otherAntiCorrosionContent}>
              <Typography color="primary">
                For other anti-corrosion products and applications see{" "}
                <Link href="/services/composites">Composites</Link> and{" "}
                <Link href="/services/sealants">
                  Specialist Sealants and Coatings
                </Link>
              </Typography>
            </Paper>
          </div>
          <section className={classes.highlights}>
            <ApplicationsHighlight />
            <InstallationsHighlight />
            <VariantsHighlight />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PolymerWrapsPage;
