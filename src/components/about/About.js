import React from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: "center"
  },
  companyName: {
    fontWeight: "bold"
  },
  aboutTextContainer: {
    marginTop: theme.spacing.unit * 2
  },
  aboutText: {
    textAlign: "center"
  },
  textSection: {
    marginTop: theme.spacing.unit * 2
  },
  intro: {
    marginBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(props => (
  <section className={props.classes.root}>
    <Grid
      className={props.classes.aboutTextContainer}
      justify="center"
      container
    >
      <Grid className={props.classes.aboutText} item xs={10} sm={8}>
        <Typography className={props.classes.intro} variant="h5">
          At <span className={props.classes.companyName}>Ecosse Global UK</span>
          , our aim is to provide our clients with the most effective,
          innovative solutions for all their asset integrity needs.
        </Typography>
        <Typography color="textSecondary">
          Ecosse Global UK Limited has over 28 years of industry experience of
          understanding effective asset lifecycle extension. Looking for the
          answers to clients problems, we at Ecosse Global UK maintain a
          watchful eye on new technology with a view to developing innovative
          products.
        </Typography>
      </Grid>
    </Grid>
  </section>
));
