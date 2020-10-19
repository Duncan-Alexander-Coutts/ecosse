import React from "react";
import { Typography, Grid, Button, withStyles } from "@material-ui/core";

import { withFadeIn } from '../components/higher-order/withFadeIn'
import TitledImagedContent from "./TitledImageContent";

const styles = theme => ({
  productHighlightDescriptionContainer: {
    maxWidth: 400
  },
  imageClass: {
    maxWidth: 400,
    width: "100%",
    height: "auto",
    borderRadius: "50%"
  },
  caseStudyButtonContainer: {
    marginTop: theme.spacing()
  }
});

const ProductHighlight = props => {
  const getCaseStudyItems = () =>
    props.caseStudies.map(study => (
      <Grid item>
        <Button variant="outlined" color="primary">
          {study.label}
        </Button>
      </Grid>
    ));

  return (
    <TitledImagedContent
      title={props.title}
      image={props.image}
      reverseAlignment={props.reverseAlignment}
      invertColors={props.invertColors}
      imageClass={props.classes.imageClass}
    >
      <div className={props.classes.productHighlightDescriptionContainer}>
        {props.children}
        {props.caseStudies && props.caseStudies.length && (
          <div>
            <Typography color="primary" variant="h6">
              Case Studies
            </Typography>
            <Grid
              container
              spacing={1}
              className={props.classes.caseStudyButtonContainer}
            >
              {getCaseStudyItems()}
            </Grid>
          </div>
        )}
      </div>
    </TitledImagedContent>
  );
};

export default withFadeIn(withStyles(styles)(ProductHighlight));