import React from "react";
import { Typography, withStyles, Grid, Fade } from "@material-ui/core";
import { FADE_TRANSITION_DURATION } from "../../constants";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: "center"
  },
  companyName: {
    fontWeight: "bold"
  },
  aboutTextContainer: {
    marginTop: theme.spacing(2)
  },
  aboutText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textSection: {
    marginTop: theme.spacing(2)
  },
  intro: {
    marginBottom: theme.spacing(2)
  },
  secondaryIntro: {
    maxWidth: 500
  }
});

export default withStyles(styles)(props => (
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
            At{" "}
            <span className={props.classes.companyName}>Ecosse Global UK</span>,
            our aim is to provide our clients with the most effective,
            innovative solutions for all their asset integrity needs.
          </Typography>
          <Typography
            className={props.classes.secondaryIntro}
            color="primary"
            variant="subtitle1"
          >
            Ecosse Global UK Limited has over 28 years of industry experience of
            understanding effective asset lifecycle extension. Looking for the
            answers to clients problems, we at Ecosse Global UK maintain a
            watchful eye on new technology with a view to developing innovative
            products.
          </Typography>
        </Grid>
      </Grid>
    </section>
  </Fade>
));
