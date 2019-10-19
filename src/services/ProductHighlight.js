import React from "react";
import TitledImagedContent from "./TitledImageContent";
import { Typography, Grid, Button, withStyles } from "@material-ui/core";

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
    marginTop: theme.spacing.unit
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
              spacing={props.theme.spacing.unit}
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

export default withStyles(styles, { withTheme: true })(ProductHighlight);
