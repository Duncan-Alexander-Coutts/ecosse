import React from "react";
import { Typography, withStyles, Link } from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
import linkedInIcon from "../LI-In-Bug.png";

const styles = theme => ({
  emailContainer: {
    display: "flex",
    alignItems: "center"
  },
  emailIcon: {
    marginRight: theme.spacing(0.5)
  },
  linkInIcon: {
    width: 24
  },
  linkedInLink: {
    display: "flex"
  }
});

const TeamItemContent = props => (
  <>
    <Typography color="primary" variant="h5">
      {props.name}
    </Typography>
    <Typography color="secondary" variant="caption">
      {props.title}
    </Typography>
    <Typography color="primary" variant="body1">
      {props.children}
    </Typography>
    <div className={props.classes.emailContainer}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.linkedInLink}
        className={props.classes.linkedInLink}
      >
        <img className={props.classes.linkInIcon} src={linkedInIcon} alt="LinkedIn logo" />
      </a>
      <MailOutline className={props.classes.emailIcon} />
      <Link variant="caption" href={"mailto:" + props.email}>
        {props.email}
      </Link>
    </div>
  </>
);

export default withStyles(styles)(TeamItemContent);
