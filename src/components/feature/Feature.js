import { Grid } from "@material-ui/core";
import React from "react";

const FeatureGridItem = ({ children }) => (
  <Grid item xs={6} sm={4}>
    {children}
  </Grid>
);

export { FeatureGridItem };
