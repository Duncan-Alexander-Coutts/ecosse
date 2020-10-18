import React from "react";
import { Typography, withStyles, Grid, Fade } from "@material-ui/core";
import { FADE_TRANSITION_DURATION } from "../../constants";
import { Trans, useTranslation } from "react-i18next";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  aboutTextContainer: {
    marginTop: theme.spacing(2),
  },
  aboutText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textSection: {
    marginTop: theme.spacing(2),
  },
  intro: {
    marginBottom: theme.spacing(2),
  },
  secondaryIntro: {
    maxWidth: 500,
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <section className={props.classes.root}>
        <Grid
          className={props.classes.aboutTextContainer}
          justify="center"
          container
        >
          <Grid className={props.classes.aboutText} item xs={10} sm={8}>
            <Typography
              color="primary"
              className={props.classes.intro}
              variant="h5"
            >
              <Trans i18nKey="home.intro" />
            </Typography>
            <Typography
              className={props.classes.secondaryIntro}
              color="primary"
              variant="subtitle1"
            >
              {t("home.subIntro")}
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Fade>
  );
});
