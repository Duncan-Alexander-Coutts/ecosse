import React from "react";
import { Typography } from "@material-ui/core";
import ProductHighlight from "../../components/product-highlight/ProductHighlight";
import ManOnLadder from "../../images/corrosion/man-on-ladder.jpg";

const ApplicationsHighlight = () => {
  return (
    <ProductHighlight title="Applications" image={ManOnLadder}>
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
