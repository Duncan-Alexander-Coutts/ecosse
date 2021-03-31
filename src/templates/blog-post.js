import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import Img from "gatsby-image";
import { makeStyles, Typography } from "@material-ui/core";
import { DatePosted } from "../components/date-posted/DatePosted";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Link } from "react-router-dom";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      datePosted(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    maxWidth: "60%",
    margin: "auto",
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "auto",
    fontWeight: "bold",
    marginBottom: theme.spacing(),
  },
  datePosted: {
    margin: "auto",
    marginBottom: theme.spacing(),
  },
  featuredImage: {
    maxWidth: theme.spacing(80),
    transform: "translateX(-50%)",
    left: "50%",
  },
  richTextContainer: {
    marginTop: theme.spacing(4),
  },
  commonHeading: { marginBottom: theme.spacing(), fontWeight: "bold" },
}));

const getOptions = (classes) => ({
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: ({
      data: {
        target: { slug, title },
      },
    }) => <Link to={slug}>{title}</Link>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => <Img {...node.data.target} />,
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography style={{ marginBottom: 8 }} paragraph>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h1">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h2">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h3">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h4">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h5">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Typography className={classes.commonHeading} variant="h6">
        {children}
      </Typography>
    ),
  },
});

const BlogPost = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.contentContainer}>
        <Typography className={classes.title} variant="h1">
          {data.contentfulBlogPost.title}
        </Typography>
        <div className={classes.datePosted}>
          <DatePosted datePosted={data.contentfulBlogPost.datePosted} />
        </div>
        {data.contentfulBlogPost.featuredImage && (
          <Img
            className={classes.featuredImage}
            fluid={data.contentfulBlogPost.featuredImage.fluid}
            alt={data.contentfulBlogPost.title}
          />
        )}
        <div className={classes.richTextContainer}>
          {renderRichText(data.contentfulBlogPost.body, getOptions(classes))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
