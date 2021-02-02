import React from "react";
import {
  Typography,
  Grid,
  Button,
  withStyles,
  Card,
  CardContent,
} from "@material-ui/core";

import ImagedContentItem from "../imaged-content/ImagedContentItem";

const styles = (theme) => ({
  container: {
    marginBottom: theme.spacing(4),
  },
  content: {
    margin: "auto",
    border: `2px solid ${theme.palette.primary.main}`,
    maxWidth: theme.breakpoints.values.md,
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
  const renderCaseStudyItems = () =>
    props.caseStudies.map((study) => (
      <Grid key={study.label} item>
        <Button variant="outlined" color="primary">
          {study.label}
        </Button>
      </Grid>
    ));

  return (
    <Card elevation={0} className={props.classes.container}>
      <CardContent className={props.classes.content}>
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
                  {renderCaseStudyItems()}
                </Grid>
              </div>
            )}
          </div>
        </ImagedContentItem>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ProductHighlight);
