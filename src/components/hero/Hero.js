import React from "react";
import { withStyles, Typography, Grow } from "@material-ui/core";
import { ECOSSE_COLOURS } from "../../constants";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const styles = (theme) => ({
  heroContainer: {
    position: "relative",
  },
  hero: {
    width: "100%",
    height: 550,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: theme.shadows[2],
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
  },
  slogan: {
    color: "white",
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    zIndex: 1,
  },
  polygonContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    opacity: 0.4,
    zIndex: 0,
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
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "home/hero.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const heroImage = data.desktop.childImageSharp.fluid;

  const renderSlogan = () => {
    return (
      <div className={props.classes.overlayContainer}>
        <Grow in={true} timeout={1000}>
          <>
            <Typography align="center" className={props.classes.slogan}>
              Ultimate asset integrity solutions
            </Typography>
            <div className={props.classes.polygonContainer}>
              <div
                className={`${props.classes.polygon} ${props.classes.polygonBlue}`}
              />
              <div
                className={`${props.classes.polygon} ${props.classes.polygonRed}`}
              />
            </div>
          </>
        </Grow>
      </div>
    );
  };

  return (
    <div className={props.classes.heroContainer}>
      <BackgroundImage fluid={heroImage} className={props.classes.hero} />
      {renderSlogan()}
    </div>
  );
});
