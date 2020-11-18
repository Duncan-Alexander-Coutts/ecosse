import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Feature, FeatureGridItem } from "../../components/feature/Feature";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";
import { Statement } from "../../components/statement/Statement";
import { CONTENT_MAX_WIDTH } from "../../constants";

import ResinPour from "../../images/sealants/resin-pour.jpg";
import ResinBucket from "../../images/sealants/resin-bucket.jpg";
import BioDurPour from "../../images/sealants/bio-dur-pour.jpg";
import { BlurOn, PanoramaWideAngle } from "@material-ui/icons";
import { Radioactive, HomeRoof, HammerWrench } from "mdi-material-ui";
import BioDur563Highlight from "./BioDur563Highlight";
import BioSeal197Highlight from "./BioSeal197Highlight";
import BioTuff592Highlight from "./BioTuff592Highlight";

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
  { image: ResinBucket, altI18nKey: "Hello there" },
  { image: ResinPour, altI18nKey: "Hello there" },
  { image: BioDurPour, altI18nKey: "Hello there" },
];

const SealantsPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("sealants.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroCarousel items={carouselItems} />
      <Statement i18nKey="sealants.intro" />
      <div className={classes.contentContainer}>
        <Grid className={classes.featuresContainer} justify="center" container>
          <FeatureGridItem>
            <Feature icon={HammerWrench} i18nKey="sealants.features.deck" />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature icon={HomeRoof} i18nKey="sealants.features.module" />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature
              icon={PanoramaWideAngle}
              i18nKey="sealants.features.tank"
            />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature icon={BlurOn} i18nKey="sealants.features.abrasian" />
          </FeatureGridItem>
          <FeatureGridItem>
            <Feature icon={Radioactive} i18nKey="sealants.features.flexible" />
          </FeatureGridItem>
        </Grid>
        <section className={classes.highlights}>
          <BioDur563Highlight />
          <BioSeal197Highlight />
          <BioTuff592Highlight />
        </section>
      </div>
    </div>
  );
};

export { SealantsPage };
