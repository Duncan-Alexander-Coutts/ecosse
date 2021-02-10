import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../product-highlight/ProductHighlight";
import IntermediateHeader from "../common/IntermediateHeader";
import PipePenetrationImage from "../../images/fire-and-blast/pipe-penetration-seal.jpg";

const PipePenetrationHighlight = () => {
  return (
    <ProductHighlight
      title="Pipe Penetration Seals"
      image={PipePenetrationImage}
    >
      <IntermediateHeader>
        Pipe penetration seals are suitable for steel pipe sizes from 33mm to
        1067mm OD.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        They have been subjected to independent blast over pressure testing and
        have proved their ability to maintain stability and integrity in blasts
        of up to 1.35 bar g.
      </Typography>
    </ProductHighlight>
  );
};

export default PipePenetrationHighlight;
