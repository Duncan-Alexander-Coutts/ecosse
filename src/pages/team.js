import React from "react";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";
import { Layout } from "../components/Layout";
import carolineMugshot from "../images/team/caroline.jpg";
import ernieMugshot from "../images/team/ernie.jpg";
import { Fade, Typography, makeStyles } from "@material-ui/core";
import TeamItemContent from "../components/team-item-content/TeamItemContent";
import { FADE_TRANSITION_DURATION } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  teamContainer: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    maxWidth: 1000,
  },
  imageClass: {
    width: 300,
    borderRadius: "50%",
  },
}));

const TeamPage = () => {
  const classes = useStyles();
  return (
    <Layout pageTitle="Team">
      <div className={classes.root}>
        <div className={classes.teamContainer}>
          <ImagedContentItem
            reverseAlignment
            image={ernieMugshot}
            imageClass={classes.imageClass}
            imageAlt="Ernie Coutts CEO"
          >
            <TeamItemContent
              name="Ernie Coutts"
              title="Chief Executive Officer"
              email="ernie@ecosseglobaluk.com"
              linkedInLink="https://www.linkedin.com/in/ernie-coutts-95a33a45/"
            >
              <Typography color="primary" paragraph>
                Energy industry professional with a wealth of experience
                covering design through to delivery of many commonly used
                products in new-build and brownfield projects. Currently
                focusing on "life cycle enhancement" projects and their many
                challenges relating to retaining current operator assets using
                composite repair techniques.
              </Typography>
              <Typography color="primary" paragraph>
                Ernie has designed a range of “industry first” diverless repairs
                using retrofit internal water tolerant composite liners for the
                reconditioning of ageing caissons and conductors.
              </Typography>
            </TeamItemContent>
          </ImagedContentItem>
          <ImagedContentItem
            image={carolineMugshot}
            imageClass={classes.imageClass}
            imageAlt="Caroline Hyland Director"
          >
            <TeamItemContent
              name="Caroline Hyland"
              title="Managing Director"
              email="caroline@ecosseglobaluk.com"
              linkedInLink="https://www.linkedin.com/in/caroline-hyland-8a4a6166/"
            >
              <Typography color="primary" paragraph>
                Experienced Director with a demonstrated history of working in
                the oil & gas energy industry. Skilled in Accounting,
                Management, Product Marketing, and Renewable Energy. Strong
                professional with a BA (Hons) focused in Liberal Arts and
                Sciences.
              </Typography>
            </TeamItemContent>
          </ImagedContentItem>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
