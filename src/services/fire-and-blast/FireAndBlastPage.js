import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Clamp from "../../images/composites/clamp.jpg";
import { HeroCarousel } from "../../components/hero-carousel/HeroCarousel";

const useStyles = makeStyles((theme) => ({}));

const FireAndBlastPage = ({ setPageTitle }) => {
  useEffect(() => setPageTitle(t("fireAndBlast.pageHeader")));
  const { t } = useTranslation();
  const classes = useStyles();

  const carouselItems = [{ image: Clamp, altI18nKey: "Hello there" }];

  return (
    <div>
      <HeroCarousel items={carouselItems} />
    </div>
  );
};

export default FireAndBlastPage;
