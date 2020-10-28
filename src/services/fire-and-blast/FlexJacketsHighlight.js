import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import IntermediateHeader from "../../components/common/IntermediateHeader";
import PipePenetrationImage from "../../images/fire-and-blast/flex-jackets.jpg";

const FlexJacketsHighlight = () => {
  const caseStudies = [{ label: "Golden Gate" }, { label: "BP Gulf Rig" }];

  return (
    <ProductHighlight
      title="Flexible Jackets"
      caseStudies={caseStudies}
      image={PipePenetrationImage}
    >
      <IntermediateHeader>
        Manufactured from multi-layer fabrics, our Jacket Systems are designed
        with ease of installation in mind.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        These units are simple to install and require no special tools or
        training, we use hook and loop fastener and metal worm drive clip
        systems for fixings making removal and reinstating simple, this is
        beneficial when it comes to asset maintenance and corrosion management.
      </Typography>
    </ProductHighlight>
  );
};

export default FlexJacketsHighlight;
