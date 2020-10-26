import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({}));

const FireAndBlastPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("fireAndBlast.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  return <div>Hello Fire and Blast</div>;
};

export default FireAndBlastPage;
