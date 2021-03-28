import React from "react";
import About from "../components/home-page/about/About";
import Services from "../components/home-page/services/Services";
import { withStyles } from "@material-ui/core";
import { Layout } from "../components/Layout";
import Hero from "../components/hero/Hero";
import { HomeBlog } from "../components/home-page/blog/HomeBlog";
import { graphql } from "gatsby";

const styles = () => ({
  services: {
    display: "flex",
    justifyContent: "center",
  },
});

const HomePage = (props) => {
  const { data } = props;
  return (
    <Layout
      pageTitle="Ecosse Global UK"
      hideInPageTitle
      delayHeaderBackgroundColour
    >
      <Hero />
      <About />
      <div className={props.classes.services}>
        <Services />
      </div>
      <HomeBlog posts={data.allContentfulBlogPost} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(limit: 4, sort: { fields: datePosted, order: DESC }) {
      ...BlogPost
    }
  }
`;

export default withStyles(styles)(HomePage);
