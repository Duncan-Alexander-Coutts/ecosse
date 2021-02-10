import { Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = ({ items }) => {
  const { t } = useTranslation();
  return (
    <Grid justify="center" container>
      <Grid item xs={12} md={10} lg={8}>
        <Carousel showThumbs={false} showStatus={false}>
          {items.map((item) => (
            <div key={item.altI18nKey}>
              <img src={item.image} alt={t(item.altI18nKey)} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export { HeroCarousel };
