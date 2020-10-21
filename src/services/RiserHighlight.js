import React from "react";
import ProductHighlight from "./ProductHighlight";
import IntermediateHeader from "../components/common/IntermediateHeader";
import { Typography } from "@material-ui/core";
import RiserIntroImage from "../riser-intro.png";

const RiserHighlight = () => {
  const caseStudies = [
    { label: "Almost heaven" },
    { label: "Brooklyn bridge" },
  ];

  return (
    <ProductHighlight
      caseStudies={caseStudies}
      title="Riser"
      image={RiserIntroImage}
    >
      <IntermediateHeader>
        For producing risers in the splashzone, the shutdown of the same is not
        always possible to effect corrosion protection so Ecosse have developed
        their Ecowrap and Ecowrap S for retrofit corrosion protection and
        structural reinforcement in the form of an easy to install jacket wrap.
      </IntermediateHeader>
      <Typography color="primary" paragraph>
        These are installed by rope access technicians or divers and are
        designed to suit the riser outer diameter with the facility to “stack”
        to any length as required.
      </Typography>
      <Typography color="primary" paragraph>
        Ecowrap S is a structural version which carries a hydrophobic epoxy
        resin on its inner liner whilst the standard Ecowrap has a thixotropic
        anticorrosion gel and is used for anticorrosion only.
      </Typography>
    </ProductHighlight>
  );
};

export default RiserHighlight;
