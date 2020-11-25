import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import IntermediateHeader from "../../components/common/IntermediateHeader";
import CaissonIntroImage from "../../images/composites/caisson-intro.png";

const CaissonHighlight = () => {
  return (
    <ProductHighlight title="Caisson" image={CaissonIntroImage}>
      <IntermediateHeader>
        Caissons are the arteries of offshore assets and in particular those
        servicing the firewater and dump functions.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        Loss of efficiency due to perforations whether pinholes or large
        anomalies can prove dangerous. In the event of an offshore fire as an
        example where the integral firewater pump has to work harder to overcome
        loss of pumping efficiency. Most of these caissons are elderly and are
        riddled with such anomalies so the race to keep them working is now
        approaching that of critical.
      </Typography>
      <Typography color="primary" paragraph>
        Ecosse are the first to develop an internal textile reinforcement repair
        which can be deployed from topside instead of having “over the side”
        intervention by divers and rope access technicians. Again lightweight in
        its construction it is gently deployed even into the most badly corroded
        caisson.
      </Typography>
    </ProductHighlight>
  );
};

export default CaissonHighlight;
