import React, { useEffect } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
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
import InstallationsHighlight from "./InstallationsHighlight";
import VariantsHighlight from "./VariantsHighlight";
import { Link } from "react-router-dom";

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

const CorrosionPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("corrosion.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroCarousel items={carouselItems} />
      <Statement i18nKey="corrosion.intro" />
      <Paper
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
        elevation={0}
      >
        <Typography
          style={{
            width: 800,
            textAlign: "center",
          }}
          variant="h6"
          color="primary"
          paragraph
        >
          Our range of anti corrosion products also extends to{" "}
          <Link to="/services/composites">Composites</Link> and{" "}
          <Link to="/services/sealants">Specialist Sealants and Coatings</Link>{" "}
          . This range whilst not exhaustive covers all areas of the energy
          resource and generation sectors including renewables and nuclear.
        </Typography>
      </Paper>
      <Typography variant="h4" color="primary">
        Ecowrap
      </Typography>
      <Typography
        style={{ width: 800, textAlign: "center" }}
        variant="h6"
        color="primary"
        paragraph
      >
        Ecosse Global UK however have a range of application specific products
        such as our <strong>Ecowrap</strong> polymer active corrosion protection
        jacket system as highlighted below. The anecdotal pedigree covers oil
        and gas, civils, ports and harbours, offshore wind and utilities. Please
        contact us for applications
      </Typography>
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
        {/* <div className={classes.otherAntiCorrosionContainer}>
          <Paper elevation={0} className={classes.otherAntiCorrosionContent}>
            <Typography color="primary">
              For other anti-corrosion products and applications see{" "}
              <Link to="/services/composites">Composites</Link> and{" "}
              <Link to="/services/sealants">
                Specialist Sealants and Coatings
              </Link>
            </Typography>
          </Paper>
        </div> */}
        <section className={classes.highlights}>
          <ApplicationsHighlight />
          <InstallationsHighlight />
          <VariantsHighlight />
        </section>
      </div>
    </div>
  );
};

export { CorrosionPage };
