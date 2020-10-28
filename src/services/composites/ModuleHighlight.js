import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import IntermediateHeader from "../../components/common/IntermediateHeader";
import ModuleIntroImage from "../../images/composites/module-roof-intro.png";

const ModuleHighlight = () => {
  const caseStudies = [{ label: "Tay bridge" }];

  return (
    <ProductHighlight
      title="Deck, Vessel and Module"
      caseStudies={caseStudies}
      image={ModuleIntroImage}
    >
      <IntermediateHeader>
        The loss of production due to leaking and structurally weakened pipework
        caused by corrosion and erosion costs the industry £Millions annually.
        Those producing assets nearing their “end of life” are especially prone
        to such issues.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        The application of our composite repair systems helps extend the working
        lives of the assets by replacing the deteriorated steelwork with
        lightweight textile laminations harnessed in a variety of epoxy resins
        to suit a range of situations... even underwater!
      </Typography>
      <Typography color="primary" paragraph>
        We pride ourselves on being able to offer such solutions to pipework
        which may be leaking to those operating at opposite ends of the
        temperature scale.
      </Typography>
    </ProductHighlight>
  );
};

export default ModuleHighlight;
