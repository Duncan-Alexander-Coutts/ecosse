import React from "react";
import ProductHighlight from "./ProductHighlight";
import IntermediateHeader from "../components/common/IntermediateHeader";
import { Typography } from "@material-ui/core";
import PipePressureIntroImage from "../pipe-pressure-intro.png";

const PipePressureHighlight = () => {
  const caseStudies = [
    { label: "LHC Geneva" },
    { label: "EFD gas mains" },
    { label: "Rowan Gorilla II" },
  ];

  return (
    <ProductHighlight
      caseStudies={caseStudies}
      title="Pipe Pressure"
      image={PipePressureIntroImage}
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

export default PipePressureHighlight;
