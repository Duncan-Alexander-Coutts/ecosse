import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import OffshoreJacket from "../../images/corrosion/offshore-jacket.jpg";

const InstallationsHighlight = () => {
  return (
    <ProductHighlight title="Installation" image={OffshoreJacket}>
      <Typography color="primary" paragraph>
        Our <strong>Ecowrap</strong> gel impregnated jacket system is{" "}
        <strong>easily installed</strong> using simple threaded draw bolts and
        air/ hydraulic wrenches and can be fitted subsea by divers or in the
        splashzone via rope access technicians or a pontoon boat crew.
      </Typography>
      <Typography color="primary" paragraph>
        <strong>Ecowrap</strong> is a tough stretchable polymer jacket system
        which harnesses an inner gel filled Polyester non woven felt. The
        mechanical “stretching” of the outer polymer textile induces residual
        hoop forces which in turn create “crush” forces on the gel, moving it
        into the crevices and interstices of the structure with ease.
      </Typography>
      <Typography color="primary" paragraph>
        The product can be “stacked” to accommodate extended length corrosion
        protection scenarios.
      </Typography>
    </ProductHighlight>
  );
};

export default InstallationsHighlight;
