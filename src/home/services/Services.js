import React from "react";

import rust from "../../rust.png";
import composite from "../../composite.png";
import sealants from "../../sealants.png";
import fire from "../../fire.png";
import { withStyles, Fade, Typography } from "@material-ui/core";
import Service from "./Service";

const styles = theme => ({
  header: {
    fontWeight: "bold"
  },
  serviceList: {
    paddingTop: theme.spacing.unit * 5
  }
});

export default withStyles(styles)(props => (
  <Fade in timeout={1000}>
    <div style={{ width: "100%" }}>
      <Typography
        variant="h3"
        align="center"
        color="primary"
        className={props.classes.header}
      >
        Services
      </Typography>
      <div className={props.classes.serviceList}>
        <Service
          invertColors
          image={rust}
          title="Anti Corrosion"
          description="Some text that describes anti corrosion services. And then some other text. Some other text too."
          url="/home"
        />
        <Service
          reverseAlignment
          image={composite}
          title="Composites"
          description="Our modern composite repair systems are extremely versatile, adaptable and reliable. They have many impressive capabilities that make them an attractive alternative to traditional repair or replacement methods."
          url="/services/composites"
        />
        <Service
          image={fire}
          invertColors
          title="Fire and Blast"
          description="Some text that describes fire and blast services"
        />
        <Service
          reverseAlignment
          image={sealants}
          title="Structual Sealants"
          description="Some text that describes sealant services"
        />
      </div>
    </div>
  </Fade>
));
