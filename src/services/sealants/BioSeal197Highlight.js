import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import BioSealImage from "../../images/sealants/bio-seal-197.jpg";
import { Trans, useTranslation } from "react-i18next";
import { LabeledTick } from "../../components/labeled-tick/LabeledTick";

const useStyles = makeStyles(() => ({
  keyPointsList: {
    padding: 0,
    "& > li": {
      listStyle: "none",
    },
  },
}));

const BioSeal197Highlight = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const keyPoints = t("sealants.highlights.bioseal197.keyPoints", {
    returnObjects: true,
  });

  return (
    <ProductHighlight
      title={t("sealants.highlights.bioseal197.title")}
      image={BioSealImage}
    >
      {t("sealants.highlights.bioseal197.paragraphs", {
        returnObjects: true,
      }).map((paragraph) => (
        <Typography color="primary" paragraph>
          <Trans>{paragraph}</Trans>
        </Typography>
      ))}
      <ul className={classes.keyPointsList}>
        {keyPoints.map((point) => (
          <li>
            <LabeledTick label={point} />
          </li>
        ))}
      </ul>
    </ProductHighlight>
  );
};

export default BioSeal197Highlight;
