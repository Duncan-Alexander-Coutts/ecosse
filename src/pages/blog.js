import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Img from "gatsby-image";
import { Layout } from "../components/Layout";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DatePosted } from "../components/date-posted/DatePosted";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const Blog = () => {
  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: datePosted, order: DESC }) {
          edges {
            node {
              id
              title
              slug
              datePosted(formatString: "Do MMMM, YYYY")
              shortDescription
              featuredImage {
                fluid(maxWidth: 300) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout pageTitle="Blog">
      <Grid className={classes.container} spacing={2} container>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Grid item md={3}>
              <Card className="post" key={edge.node.id}>
                <CardHeader
                  titleTypographyProps={{ variant: "h3" }}
                  title={edge.node.title}
                  subheader={<DatePosted datePosted={edge.node.datePosted} />}
                />
                {edge.node.featuredImage && (
                  <Img
                    className="featured"
                    fluid={edge.node.featuredImage.fluid}
                    alt={edge.node.title}
                  />
                )}
                <CardContent>
                  <Typography>{edge.node.shortDescription}</Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default Blog;
