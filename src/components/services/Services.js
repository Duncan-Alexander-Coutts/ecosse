import React from "react";

import menClipboard from "../../men-clipboard.png";
import { withStyles } from "@material-ui/core";
import Service from "./Service";

const styles = theme => ({
  serviceList: {
    marginTop: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(props => (
  <div className={props.classes.serviceList}>
    <Service
      image={menClipboard}
      imageAlignment="left"
      title="Anti Corrosion"
      description="Some text that describes anti corrosion services. And then some other text. Some other text too."
    />
    <Service
      image={menClipboard}
      title="Composites"
      description="Some text that describes anti composite services"
    />
    <Service
      image={menClipboard}
      imageAlignment="left"
      title="Fire and Blast"
      description="Some text that describes fire and blast services"
    />
    <Service
      image={menClipboard}
      title="Sealants"
      description="Some text that describes sealant services"
    />
  </div>
));
