import React from "react";
import { useTranslation } from "react-i18next";
import { withStyles, Fade, Grid } from "@material-ui/core";

import rust from "../../../images/home/rust.png";
import composite from "../../../images/home/composite.jpg";
import sealants from "../../../images/home/sealants.png";
import fire from "../../../images/home/fire.png";
import { IntroCard } from "../../intro-card/IntroCard";
import { SectionTitle } from "../../section-title/SectionTitle";
import { CONTENT_MAX_WIDTH } from "../../../constants";

const styles = (theme) => ({
  header: {
    fontWeight: "bold",
  },
  serviceList: {
    padding: theme.spacing(),
    paddingTop: theme.spacing(5),
    maxWidth: CONTENT_MAX_WIDTH,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  supportingServicesList: {
    justifyContent: "center",
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitle title={t("home.services.antiCorrosionTitle")} />
      <Grid container spacing={2} className={props.classes.serviceList}>
        <Grid xs={12} md={4} item>
          <IntroCard
            header={t("home.services.polymerWraps.title")}
            image={rust}
            description={t("home.services.polymerWraps.description")}
            link="/services/polymerwraps"
          />
        </Grid>
        <Grid xs={12} md={4} item>
          <IntroCard
            header={t("home.services.composites.title")}
            image={composite}
            description={t("home.services.composites.description")}
            link="/services/composites"
          />
        </Grid>
        <Grid xs={12} md={4} item>
          <IntroCard
            header={t("home.services.sealants.title")}
            image={sealants}
            description={t("home.services.sealants.description")}
            link="/services/sealants"
          />
        </Grid>
      </Grid>
      <SectionTitle title={t("home.services.supportingProductsTitle")} />
      <Grid
        container
        spacing={2}
        className={`${props.classes.serviceList} ${props.classes.supportingServicesList}`}
      >
        <Grid xs={12} md={4} item>
          <IntroCard
            header={t("home.services.fireAndBlast.title")}
            image={fire}
            description={t("home.services.fireAndBlast.description")}
            link="/services/fireandblast"
          />
        </Grid>
      </Grid>
    </div>
  );
});
