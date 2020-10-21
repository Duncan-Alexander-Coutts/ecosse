import React, { useEffect } from "react";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";
import carolineMugshot from "../caroline.jpg";
import ernieMugshot from "../ernie.jpg";
import { withStyles, Fade } from "@material-ui/core";
import TeamItemContent from "./TeamItemContent";
import { FADE_TRANSITION_DURATION } from "../constants";

const styles = (theme) => ({
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
});

const TeamPage = (props) => {
  useEffect(() => props.setPageTitle("Team"));
  return (
    <Fade in timeout={FADE_TRANSITION_DURATION}>
      <div className={props.classes.root}>
        <div className={props.classes.teamContainer}>
          <ImagedContentItem
            reverseAlignment
            image={ernieMugshot}
            imageClass={props.classes.imageClass}
            imageAlt="Ernie Coutts CEO"
          >
            <TeamItemContent
              name="Ernie Coutts"
              title="Chief Executive Officer"
              email="ernie.coutts@ecosseglobaluk.com"
              linkedInLink="https://www.linkedin.com/in/ernie-coutts-95a33a45/"
            >
              <p>
                Energy industry professional with a wealth of experience
                covering design through to delivery of many commonly used
                products in new-build and brownfield projects. Currently
                focusing on "life cycle enhancement" projects and their many
                challenges relating to retaining current operator assets using
                composite repair techniques.
              </p>
              <p>
                Ernie has designed a range of “industry first” diverless repairs
                using retrofit internal water tolerant composite liners for the
                reconditioning of ageing caissons and conductors.
              </p>
            </TeamItemContent>
          </ImagedContentItem>
          <ImagedContentItem
            image={carolineMugshot}
            imageClass={props.classes.imageClass}
            imageAlt="Caroline Hyland Director"
          >
            <TeamItemContent
              name="Caroline Hyland"
              title="Managing Director"
              email="caroline.hyland@ecosseglobaluk.com"
              linkedInLink="https://www.linkedin.com/in/caroline-hyland-8a4a6166/"
            >
              <p>
                Experienced Director with a demonstrated history of working in
                the oil & gas energy industry. Skilled in Accounting,
                Management, Product Marketing, and Renewable Energy. Strong
                professional with a BA (Hons) focused in Liberal Arts and
                Sciences.
              </p>
            </TeamItemContent>
          </ImagedContentItem>
        </div>
      </div>
    </Fade>
  );
};

export default withStyles(styles)(TeamPage);
