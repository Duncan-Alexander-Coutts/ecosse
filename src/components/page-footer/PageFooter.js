import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import Achilles from "../../images/logos/achilles.svg";
import CompositesBadge from "../../images/logos/composites-badge.svg";
import DnvGl from "../../images/logos/dnvgl.svg";
import Chamber from "../../images/logos/dacc_logo.png";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
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
});

export default withStyles(styles)((props) => {
  const { t } = useTranslation();

  return (
    <footer>
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
          {t("footer.ownership")}
        </Typography>
      </Paper>
    </footer>
  );
});
