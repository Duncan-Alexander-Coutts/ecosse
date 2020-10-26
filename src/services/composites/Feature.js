import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { ECOSSE_COLOURS } from "../../constants";
import { Trans, useTranslation } from "react-i18next";

const styles = (theme) => ({
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
    display: "block",
    margin: "auto",
  },
});

const Feature = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.classes.root}>
      <props.icon fontSize="large" className={props.classes.icon} />
      <Typography color="primary" className={props.classes.title} variant="h6">
        {t(`${props.i18nKey}.label`)}
      </Typography>
      <Typography color="primary">
        <Trans i18nKey={`${props.i18nKey}.description`} />
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Feature);
