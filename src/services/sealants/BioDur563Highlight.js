import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import ModuleIntroImage from "../../images/composites/module-roof-intro.png";

const BioDur563Highlight = () => {
  const caseStudies = [{ label: "Tay bridge" }];

  return (
    <ProductHighlight
      title="Bio-Dur 563"
      caseStudies={caseStudies}
      image={ModuleIntroImage}
    >
      <Typography color="primary" paragraph>
        <strong>Problem -</strong> Severe corrosion of metal resulting in
        leaking module roof
      </Typography>
      <Typography color="primary" paragraph>
        <strong>Solution -</strong> Patch repairs using carbon fibre and epoxy
        resin sealant topcoat of Bio-Dur 563
      </Typography>
      <Typography color="primary" paragraph>
        2 layers of carbon fibre saturated with moisture tolerant resin to add
        structural strength and patch holes. As the resin is completely moisture
        tolerant, the repair can be installed in the pouring rain. Topcoat of
        &nbsp;
        <strong>Bio-Dur 563</strong>.
      </Typography>
    </ProductHighlight>
  );
};

export default BioDur563Highlight;
