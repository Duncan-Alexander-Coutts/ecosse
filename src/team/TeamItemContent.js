import React from "react";
import { Typography, withStyles, Link, Icon } from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
import linkedInIcon from "../LI-In-Bug.png";

const styles = theme => ({
  emailContainer: {
    display: "flex",
    alignItems: "center"
  },
  emailIcon: {
    marginRight: theme.spacing.unit / 2
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
    <Typography variant="headline">{props.name}</Typography>
    <Typography color="secondary" variant="caption">
      {props.title}
    </Typography>
    <Typography color="textSecondary" variant="body1">
      {props.children}
    </Typography>
    <div className={props.classes.emailContainer}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.linkedInLink}
        className={props.classes.linkedInLink}
      >
        <img className={props.classes.linkInIcon} src={linkedInIcon} />
      </a>
      <MailOutline className={props.classes.emailIcon} />
      <Link variant="caption" href={"mailto:" + props.email}>
        {props.email}
      </Link>
    </div>
  </>
);

export default withStyles(styles)(TeamItemContent);