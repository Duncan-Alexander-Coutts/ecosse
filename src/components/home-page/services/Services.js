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
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitle title={t("home.services.title")} />
      <Grid container spacing={2} className={props.classes.serviceList}>
        <Grid xs={12} md={6} item>
          <IntroCard
            header={t("home.services.antiCorrosion.title")}
            image={rust}
            description={t("home.services.antiCorrosion.description")}
            link="/services/ecowrap"
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <IntroCard
            header={t("home.services.composites.title")}
            image={composite}
            description={t("home.services.composites.description")}
            link="/services/composites"
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <IntroCard
            header={t("home.services.fireAndBlast.title")}
            image={fire}
            description={t("home.services.fireAndBlast.description")}
            link="/services/fireandblast"
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <IntroCard
            header={t("home.services.sealants.title")}
            image={sealants}
            description={t("home.services.sealants.description")}
            link="/services/sealants"
          />
        </Grid>
      </Grid>
    </div>
  );
});
