import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import FireProtectedCaisson from "../../images/fire-and-blast/fire-protected-caisson.jpg";
import PipingHeatshield from "../../images/fire-and-blast/piping-heatshield.jpg";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";
import { Statement } from "../../components/statement/Statement";
import { FeatureGridItem, Feature } from "../../components/feature/Feature";
import {
  Beenhere,
  ContactSupport,
  Laptop,
  PanoramaHorizontal,
} from "@material-ui/icons";
import { CONTENT_MAX_WIDTH } from "../../constants";
import PipePenetrationHighlight from "../../components/fire-and-blast-page/PipePenetrationHighlight";
import FlexJacketsHighlight from "../../components/fire-and-blast-page/FlexJacketsHighlight";
import ModuleSealsHighlight from "../../components/fire-and-blast-page/ModuleSeals";
import { Factory } from "mdi-material-ui";
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
    paddingTop: theme.spacing(4),
  },
}));

const carouselItems = [
  { image: FireProtectedCaisson, altI18nKey: "Hello there" },
  { image: PipingHeatshield, altI18nKey: "Hello there" },
];

const FireAndBlastPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Layout title={t("fireAndBlast.pageHeader")}>
      <div className={classes.root}>
        <HeroCarousel items={carouselItems} />
        <Statement i18nKey="fireAndBlast.intro" />
        <div className={classes.contentContainer}>
          <Grid
            className={classes.featuresContainer}
            justify="center"
            container
          >
            <FeatureGridItem>
              <Feature icon={Laptop} i18nKey="fireAndBlast.features.design" />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={Beenhere}
                i18nKey="fireAndBlast.features.testing"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={Factory}
                i18nKey="fireAndBlast.features.manufacture"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={ContactSupport}
                i18nKey="fireAndBlast.features.support"
              />
            </FeatureGridItem>
            <FeatureGridItem>
              <Feature
                icon={PanoramaHorizontal}
                i18nKey="fireAndBlast.features.flexible"
              />
            </FeatureGridItem>
          </Grid>
          <section className={classes.highlights}>
            <PipePenetrationHighlight />
            <FlexJacketsHighlight />
            <ModuleSealsHighlight />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FireAndBlastPage;
