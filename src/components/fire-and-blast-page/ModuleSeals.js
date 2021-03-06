import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../product-highlight/ProductHighlight";
import IntermediateHeader from "../common/IntermediateHeader";
import PipePenetrationImage from "../../images/fire-and-blast/module-seal.jpg";

const ModuleSealsHighlight = () => {
  return (
    <ProductHighlight title="Module Seals" image={PipePenetrationImage}>
      <IntermediateHeader>
        Designed to fit individual customers requirement.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        Most units will be supplied un-punched and in easy to handle sections.
        Supplied with approximately 200mm un-bonded fabric at each end to aid
        the jointing procedure and complete with stainless steel backing flats
        and box section where required under certification.
      </Typography>
    </ProductHighlight>
  );
};

export default ModuleSealsHighlight;
