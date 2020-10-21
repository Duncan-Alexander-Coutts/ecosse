import React from "react";
import { useTranslation } from "react-i18next";
import { withStyles, Fade, Grid } from "@material-ui/core";

import rust from "../../rust.png";
import composite from "../../composite.png";
import sealants from "../../sealants.png";
import fire from "../../fire.png";
import { IntroCard } from "../../components/intro-card/IntroCard";
import { CONTENT_MAX_WIDTH, FADE_TRANSITION_DURATION } from "../../constants";
import { SectionTitle } from "../../components/section-title/SectionTitle";

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
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div>
        <SectionTitle title={t("home.services.title")} />
        <Grid container spacing={2} className={props.classes.serviceList}>
          <Grid xs={12} md={6} item>
            <IntroCard
              header={t("home.services.antiCorrosion.title")}
              image={rust}
              description={t("home.services.antiCorrosion.description")}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <IntroCard
              header={t("home.services.composites.title")}
              image={composite}
              description={t("home.services.composites.description")}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <IntroCard
              header={t("home.services.fireAndBlast.title")}
              image={fire}
              description={t("home.services.fireAndBlast.description")}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <IntroCard
              header={t("home.services.sealants.title")}
              image={sealants}
              description={t("home.services.sealants.description")}
            />
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
});
