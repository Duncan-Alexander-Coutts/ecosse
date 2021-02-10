import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { ECOSSE_COLOURS } from "../../constants";

const FeatureGridItem = ({ children }) => (
  <Grid item xs={6} sm={4}>
    {children}
  </Grid>
);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    position: "relative",
    background: "white",
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    color: ECOSSE_COLOURS.red,
    padding: theme.spacing(1),
    textAlign: "center",
    display: "block !important",
    margin: "auto",
  },
  description: {
    textAlign: "center",
  },
}));

const Feature = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <props.icon fontSize="large" className={classes.icon} />
      <Typography color="primary" className={classes.title} variant="h6">
        {t(`${props.i18nKey}.label`)}
      </Typography>
      <Typography className={classes.description} color="primary">
        <Trans i18nKey={`${props.i18nKey}.description`} />
      </Typography>
    </div>
  );
};

export { Feature, FeatureGridItem };
