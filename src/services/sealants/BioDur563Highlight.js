import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import ModuleIntroImage from "../../images/composites/module-roof-intro.png";
import { Trans, useTranslation } from "react-i18next";

const BioDur563Highlight = () => {
  const { t } = useTranslation();

  return (
    <ProductHighlight
      title={t("sealants.highlights.biodur563.title")}
      image={ModuleIntroImage}
    >
      {t("sealants.highlights.biodur563.paragraphs", {
        returnObjects: true,
      }).map((paragraph) => (
        <Typography color="primary" paragraph>
          <Trans>{paragraph}</Trans>
        </Typography>
      ))}
    </ProductHighlight>
  );
};

export default BioDur563Highlight;
