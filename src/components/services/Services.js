import React from "react";

import RigSvg from "../../svg/rig.svg";
import BridgeSvg from "../../svg/bridge.svg";
import PipeSvg from "../../svg/pipe.svg";
import Flame from "../../svg/flame.svg";
import { withStyles, Typography, Grid } from "@material-ui/core";
import Service from "./Service";

const styles = theme => ({
  serviceList: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(props => (
  <div>
    <Typography variant="h4" align="center">
      Services
    </Typography>
    <Grid container spacing={16} className={props.classes.serviceList}>
      <Grid xs={12} sm={6} md={3} item>
        <Service
          image={RigSvg}
          title="Anti Corrosion"
          description="Some text that describes anti corrosion services"
        />
      </Grid>
      <Grid xs={12} sm={6} md={3} item>
        <Service
          image={PipeSvg}
          title="Composites"
          description="Some text that describes anti composite services"
        />
      </Grid>
      <Grid xs={12} sm={6} md={3} item>
        <Service
          image={Flame}
          title="Fire and Blast"
          description="Some text that describes fire and blast services"
        />
      </Grid>
      <Grid xs={12} sm={6} md={3} item>
        <Service
          image={BridgeSvg}
          title="Sealants"
          description="Some text that describes sealant services"
        />
      </Grid>
    </Grid>
  </div>
));
