import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import WrapHands from "../../images/corrosion/wrap-hands.jpg";

const VariantsHighlight = () => {
  return (
    <ProductHighlight title="Variants" image={WrapHands}>
      <Typography color="primary" paragraph>
        The product is available also in various other fabric thicknesses for
        varying location application requirements and also in{" "}
        <strong>low profile</strong> for applications involving pipe guides and
        supports.
      </Typography>
      <Typography color="primary" paragraph>
        A <strong>"structural repair"</strong> version is also being introduced
        in the near future!
      </Typography>
    </ProductHighlight>
  );
};

export default VariantsHighlight;
