import React from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
import Image1 from "../../iStock-129944524.jpg";
import Image2 from "../../iStock-129944533.jpg";
import Image3 from "../../iStock-643553170.jpg";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    textAlign: "center"
  },
  aboutTextContainer: {
    marginTop: theme.spacing.unit * 2
  },
  aboutText: {
    textAlign: "center"
  },
  textSection: {
    marginTop: theme.spacing.unit * 2
  }
  // textAndImageContainer: {
  //   display: "flex",
  //   alignItems: "center"
  // }
});

export default withStyles(styles)(props => (
  <section className={props.classes.root}>
    <Typography variant="h4" align="center">
      About Us
    </Typography>
    <Grid
      className={props.classes.aboutTextContainer}
      justify="center"
      container
    >
      <Grid className={props.classes.aboutText} item xs={10} sm={8}>
        <div>
          <Typography variant="h6">
            At <span style={{ color: "red" }}>Ecosse Global UK</span>, our aim
            is to provide our offshore energy clients with the most effective,
            innovative solutions for all their asset integrity needs.
          </Typography>
          {/* <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke-width="1" fill="black" />
          </svg> */}
          <Typography className={props.classes.textSection} component="p">
            Ecosse Global UK Limited has over 28 years of industry experience to
            draw on when it comes to understanding effective asset lifecycle
            extension. Always looking for the answers to clients problems, we at
            Ecosse Global UK maintain a watchful eye on new technology with a
            view to developing innovative products.
          </Typography>
          <Typography className={props.classes.textSection} component="p">
            The company roots lie in asset integrity and longevity with the
            emphasis on offshore and marine structural corrosion issues with
            many successful installations resulting in its branding of the 'Eco'
            range of products. We are a small and agile company. It has always
            been our policy to be one step ahead.
          </Typography>
        </div>
      </Grid>
    </Grid>
  </section>
));
