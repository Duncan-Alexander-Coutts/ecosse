import React from "react";
import EcosseLogo from "../../images/logos/logo_svg.svg";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    padding: theme.spacing(),
    display: "flex",
  },
  logo: {
    width: 50,
    height: 50,
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
      <div className={classes.imageContainer}>
        <img
          src={EcosseLogo}
          alt="Ecosse Global fire and water logo"
          className={classes.logo}
        />
      </div>
      {!props.hideText && (
        <Typography className={classes.companyName} variant="h2">
          Ecosse Global UK
        </Typography>
      )}
    </div>
  );
};

export default Logo;
