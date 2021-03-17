import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import Achilles from "../../images/logos/achilles.svg";
import CompositesBadge from "../../images/logos/composites-badge.svg";
import DnvGl from "../../images/logos/dnvgl.svg";
import Chamber from "../../images/logos/dacc_logo.png";
import { useTranslation } from "react-i18next";
import { ECOSSE_COLOURS } from "../../constants";
import { graphql, useStaticQuery } from "gatsby";

const styles = (theme) => ({
  footer: {
    position: "relative",
  },
  root: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    borderRadius: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: "center",
  },
  badgeContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    flexWrap: "wrap",
  },
  achilles: {
    width: 144,
    height: 91,
  },
  chamber: {
    height: 91,
  },
  copyright: {
    color: theme.palette.common.white,
  },
  polygonContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    opacity: 0.75,
    zIndex: -1,
    top: 0,
  },
  polygon: {
    height: "100%",
    flex: 1,
  },
  polygonRed: {
    backgroundColor: ECOSSE_COLOURS.blue,
    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
  },
  polygonBlue: {
    backgroundColor: ECOSSE_COLOURS.red,
    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
  },
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulBlogPost {
          totalCount
        }
      }
    `
  );

  return (
    <footer className={props.classes.footer}>
      <div className={props.classes.badgeContainer}>
        <img
          className={props.classes.achilles}
          src={Achilles}
          alt="Achilles logo"
        />
        <img className={props.classes.achilles} src={DnvGl} alt="DNV GL logo" />
        <img
          className={props.classes.achilles}
          src={CompositesBadge}
          alt="DNV GL logo"
        />
        <img
          className={props.classes.chamber}
          src={Chamber}
          alt="Dundee and Angus Chamber of Commerce"
        />
      </div>
      <Paper className={props.classes.root}>
        <Typography className={props.classes.copyright}>
          {t("footer.ownership", { year: new Date().getFullYear() })}
        </Typography>
      </Paper>
      <div className={props.classes.polygonContainer}>
        <div
          className={`${props.classes.polygon} ${props.classes.polygonBlue}`}
        />
        <div
          className={`${props.classes.polygon} ${props.classes.polygonRed}`}
        />
      </div>
      <div style={{ display: "none" }}>
        {data?.allContentfulBlogPost?.totalCount}
      </div>
    </footer>
  );
});
