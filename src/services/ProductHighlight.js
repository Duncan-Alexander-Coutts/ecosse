import React from "react";
import {
  Typography,
  Grid,
  Button,
  withStyles,
  Card,
  CardContent,
} from "@material-ui/core";

import { withFadeIn } from "../components/higher-order/withFadeIn";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";

const styles = (theme) => ({
  container: {
    marginBottom: theme.spacing(4),
  },
  productHighlightDescriptionContainer: {
    maxWidth: 400,
    margin: "auto",
  },
  imageClass: {
    maxWidth: 450,
    width: "100%",
    height: "auto",
    borderRadius: "50%",
  },
  caseStudyButtonContainer: {
    marginTop: theme.spacing(),
  },
});

const ProductHighlight = (props) => {
  const getCaseStudyItems = () =>
    props.caseStudies.map((study) => (
      <Grid item>
        <Button variant="outlined" color="primary">
          {study.label}
        </Button>
      </Grid>
    ));

  return (
    <Card elevation={8} className={props.classes.container}>
      <CardContent>
        <ImagedContentItem
          title={props.title}
          image={props.image}
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
        </ImagedContentItem>
      </CardContent>
    </Card>
  );
};

export default withFadeIn(withStyles(styles)(ProductHighlight));
