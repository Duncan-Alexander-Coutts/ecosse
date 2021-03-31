import React from "react";

import { Layout } from "../components/Layout";
import { makeStyles } from "@material-ui/core";
import { BlogList } from "../components/blog-list/BlogList";
import { graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.breakpoints.values.sm,
    display: "flex",
    margin: "auto",
  },
}));

const Blog = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout pageTitle="Blog">
      <div className={classes.container}>
        <BlogList posts={data.allContentfulBlogPost} itemsPerRow={1} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: datePosted, order: DESC }) {
      ...BlogPost
    }
  }
`;

export default Blog;
