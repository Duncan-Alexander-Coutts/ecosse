import React from "react";
import { useTranslation } from "react-i18next";
import { withStyles, Fade } from "@material-ui/core";

import rust from "../../rust.png";
import composite from "../../composite.png";
import sealants from "../../sealants.png";
import fire from "../../fire.png";
import { IntroCard } from "../../components/intro-card/IntroCard";
import { FADE_TRANSITION_DURATION } from "../../constants";
import { SectionTitle } from "../../components/section-title/SectionTitle";

const styles = (theme) => ({
  header: {
    fontWeight: "bold",
  },
  serviceList: {
    padding: theme.spacing(),
    paddingTop: theme.spacing(5),
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: theme.spacing(3),
    maxWidth: 1200,
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div>
        <SectionTitle title={t("home.services.title")} />
        <div spacing={2} className={props.classes.serviceList}>
          <div>
            <IntroCard
              header={t("home.services.antiCorrosion.title")}
              image={rust}
              description={t("home.services.antiCorrosion.description")}
            />
          </div>
          <div>
            <IntroCard
              header={t("home.services.composites.title")}
              image={composite}
              description={t("home.services.composites.description")}
            />
          </div>
          <div>
            <IntroCard
              header={t("home.services.fireAndBlast.title")}
              image={fire}
              description={t("home.services.fireAndBlast.description")}
            />
          </div>
          <div>
            <IntroCard
              header={t("home.services.sealants.title")}
              image={sealants}
              description={t("home.services.sealants.description")}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
});
