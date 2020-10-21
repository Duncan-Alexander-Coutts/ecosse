import React from "react";
import EcosseLogo from "../../logo_svg.svg";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 50,
  },
  companyName: {
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
  },
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={EcosseLogo}
        alt="Ecosse Global fire and water logo"
        className={classes.logo}
      />
      {!props.hideText && (
        <Typography className={classes.companyName} variant="h5">
          Ecosse Global UK
        </Typography>
      )}
    </div>
  );
};

export default Logo;
