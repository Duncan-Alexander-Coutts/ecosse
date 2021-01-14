import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import BioTuffImage from "../../images/sealants/bio-tuff-592.jpg";
import { Trans, useTranslation } from "react-i18next";

const BioTuff592Highlight = () => {
  const { t } = useTranslation();

  return (
    <ProductHighlight
      title={t("sealants.highlights.bioTuff592.title")}
      image={BioTuffImage}
    >
      {t("sealants.highlights.bioTuff592.paragraphs", {
        returnObjects: true,
      }).map((paragraph, index) => (
        <Typography key={index} color="primary" paragraph>
          <Trans>{paragraph}</Trans>
        </Typography>
      ))}
    </ProductHighlight>
  );
};

export default BioTuff592Highlight;
