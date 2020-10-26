import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import FireProtectedCaisson from "../../images/fire-and-blast/fire-protected-caisson.jpg";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";
import { Statement } from "../../components/statement/Statement";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const carouselItems = [
  { image: FireProtectedCaisson, altI18nKey: "Hello there" },
];

const FireAndBlastPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("fireAndBlast.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroCarousel items={carouselItems} />
      <Statement i18nKey="fireAndBlast.intro" />
    </div>
  );
};

export default FireAndBlastPage;
