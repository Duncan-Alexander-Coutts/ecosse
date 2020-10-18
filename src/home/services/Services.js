import React from "react";

import rust from "../../rust.png";
import composite from "../../composite.png";
import sealants from "../../sealants.png";
import fire from "../../fire.png";
import { withStyles, Fade, Typography } from "@material-ui/core";
import Service from "./Service";
import { FADE_TRANSITION_DURATION } from "../../constants";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
  header: {
    fontWeight: "bold",
  },
  serviceList: {
    paddingTop: theme.spacing(5),
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div style={{ width: "100%" }}>
        <Typography
          variant="h3"
          align="center"
          color="primary"
          className={props.classes.header}
        >
          {t("home.services.title")}
        </Typography>
        <div className={props.classes.serviceList}>
          <Service
            invertColors
            image={rust}
            title={t("home.services.antiCorrosion.title")}
            description={t("home.services.antiCorrosion.description")}
            url="/home"
          />
          <Service
            reverseAlignment
            image={composite}
            title={t("home.services.composites.title")}
            description={t("home.services.composites.description")}
            url="/services/composites"
          />
          <Service
            image={fire}
            invertColors
            title={t("home.services.fireAndBlast.title")}
            description={t("home.services.fireAndBlast.description")}
          />
          <Service
            reverseAlignment
            image={sealants}
            title={t("home.services.sealants.title")}
            description={t("home.services.sealants.description")}
          />
        </div>
      </div>
    </Fade>
  );
});
