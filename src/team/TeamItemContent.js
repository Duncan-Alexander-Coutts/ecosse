import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
import linkedInIcon from "../images/team/LI-In-Bug.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
  },
  emailIcon: {
    marginRight: theme.spacing(0.5),
  },
  linkInIcon: {
    width: theme.spacing(3),
    height: 20,
  },
  linkedInLink: {
    display: "flex",
  },
}));

const TeamItemContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="primary" variant="h5">
        {props.name}
      </Typography>
      <Typography color="secondary" variant="caption">
        {props.title}
      </Typography>
      {props.children}
      <div className={classes.emailContainer}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={props.linkedInLink}
          className={classes.linkedInLink}
        >
          <img
            className={classes.linkInIcon}
            src={linkedInIcon}
            alt="LinkedIn logo"
          />
        </a>
        <MailOutline className={classes.emailIcon} />
        <Link variant="caption" href={"mailto:" + props.email}>
          {props.email}
        </Link>
      </div>
    </div>
  );
};

export default TeamItemContent;
