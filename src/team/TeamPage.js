import React from "react";
import ImagedContentItem from "../components/imaged-content/ImagedContentItem";
import carolineMugshot from "../caroline.jpg";
import ernieMugshot from "../ernie.jpg";
import { withStyles } from "@material-ui/core";
import TeamItemContent from "./TeamItemContent";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 4
  },
  teamContainer: {
    maxWidth: 1000
  },
  imageClass: {
    width: 300,
    borderRadius: "50%"
  }
});

const TeamPage = props => (
  <div className={props.classes.root}>
    <div className={props.classes.teamContainer}>
      <ImagedContentItem
        imageAlignment="left"
        image={ernieMugshot}
        imageClass={props.classes.imageClass}
      >
        <TeamItemContent
          name="Ernie Coutts"
          title="Chief Executive Officer"
          email="ernie.coutts@ecosseglobaluk.com"
          linkedInLink="https://www.linkedin.com/in/ernie-coutts-95a33a45/"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            convallis posuere morbi leo urna.
          </p>
          <p>
            Aliquet nibh praesent tristique magna. Turpis egestas integer eget
            aliquet nibh. Urna cursus eget nunc scelerisque. Quis varius quam
            quisque id diam vel quam elementum. Vitae nunc sed velit dignissim
            sodales.
          </p>
        </TeamItemContent>
      </ImagedContentItem>
      <ImagedContentItem
        image={carolineMugshot}
        imageClass={props.classes.imageClass}
      >
        <TeamItemContent
          name="Caroline Hyland"
          title="Director"
          email="caroline.hyland@ecosseglobaluk.com"
          linkedInLink="https://www.linkedin.com/in/caroline-hyland-8a4a6166/"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            convallis posuere morbi leo urna.
          </p>
          <p>
            Aliquet nibh praesent tristique magna. Turpis egestas integer eget
            aliquet nibh. Urna cursus eget nunc scelerisque. Quis varius quam
            quisque id diam vel quam elementum. Vitae nunc sed velit dignissim
            sodales.
          </p>
        </TeamItemContent>
      </ImagedContentItem>
    </div>
  </div>
);

export default withStyles(styles)(TeamPage);
