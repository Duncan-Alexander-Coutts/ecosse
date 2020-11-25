import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import ManOnLadder from "../../images/corrosion/man-on-ladder.jpg";

const ApplicationsHighlight = () => {
  const caseStudies = [
    { label: "Almost heaven" },
    { label: "Brooklyn bridge" },
  ];

  return (
    <ProductHighlight
      caseStudies={caseStudies}
      title="Applications"
      image={ManOnLadder}
    >
      {/* <IntermediateHeader>
        For producing risers in the splashzone, the shutdown of the same is not
        always possible to effect corrosion protection so Ecosse have developed
        their Ecowrap and Ecowrap S for retrofit corrosion protection and
        structural reinforcement in the form of an easy to install jacket wrap.
      </IntermediateHeader> */}
      <Typography color="primary" paragraph>
        With extensive experience of supplying retrofit coatings in the form of
        the <strong>Ecowrap</strong> jacket systems and speciality hi-build
        resins even to wet surfaces, <strong>Ecosse Global</strong> has gained
        favour with many of the industry majors.
      </Typography>
      <Typography color="primary" paragraph>
        <strong>Inshore ports</strong> and <strong>harbour jetty</strong>{" "}
        installations are amongst the varied application sites for numerous
        Ecosse anti corrosion products with the emphasis on{" "}
        <strong>ease of application</strong> and asset{" "}
        <strong>life-cycle longevity</strong>.
      </Typography>
    </ProductHighlight>
  );
};

export default ApplicationsHighlight;
