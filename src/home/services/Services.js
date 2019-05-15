import React from "react";

import rust from "../../rust.png";
import composite from "../../composite.png";
import sealants from "../../sealants.png";
import fire from "../../fire.png";
import { withStyles, Fade } from "@material-ui/core";
import Service from "./Service";

const styles = theme => ({
  serviceList: {
    marginTop: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(props => (
  <Fade in={true} timeout={1000}>
    <div className={props.classes.serviceList}>
      <Service
        image={rust}
        imageAlignment="left"
        title="Anti Corrosion"
        description="Some text that describes anti corrosion services. And then some other text. Some other text too."
      />
      <Service
        image={composite}
        title="Composites"
        description="Some text that describes anti composite services"
      />
      <Service
        image={fire}
        imageAlignment="left"
        title="Fire and Blast"
        description="Some text that describes fire and blast services"
      />
      <Service
        image={sealants}
        title="Structual Sealants"
        description="Some text that describes sealant services"
      />
    </div>
  </Fade>
));
