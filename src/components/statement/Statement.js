import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Trans } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  statement: {
    maxWidth: theme.spacing(100),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  statementDivider: {
    width: theme.spacing(50),
  },
}));

const Statement = ({ i18nKey }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        color="primary"
        align="center"
        variant="h3"
        className={classes.statement}
      >
        <Trans i18nKey={i18nKey} />
      </Typography>
      <Divider className={classes.statementDivider} />
    </>
  );
};

export { Statement };
