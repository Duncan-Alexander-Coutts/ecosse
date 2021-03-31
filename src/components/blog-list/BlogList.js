import React from "react";
import { graphql, Link } from "gatsby";

import Img from "gatsby-image";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DatePosted } from "../date-posted/DatePosted";

const useStyles = makeStyles((theme) => ({
  container: ({ itemsPerRow }) => ({
    padding: theme.spacing(3),
    display: "grid",
    gap: theme.spacing(4),
    gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: `repeat(1, 1fr)`,
    },
  }),
  postCard: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  actions: {
    flex: 1,
    alignItems: "flex-end",
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const BlogList = (props) => {
  const classes = useStyles(props);
  const { posts } = props;

  const renderPosts = () =>
    posts.edges.map((edge) => (
      <Card className={classes.postCard} key={edge.node.id}>
        <CardHeader
          titleTypographyProps={{ variant: "h3" }}
          title={edge.node.title}
          subheader={<DatePosted datePosted={edge.node.datePosted} />}
        />
        {edge.node.featuredImage && (
          <Img fluid={edge.node.featuredImage.fluid} alt={edge.node.title} />
        )}
        <CardContent>
          <Typography>{edge.node.shortDescription}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Link to={`/blog/${edge.node.slug}/`}>
            <Typography>Read more</Typography>
          </Link>
        </CardActions>
      </Card>
    ));

  return (
    <div className={classes.container}>{posts ? renderPosts() : null}</div>
  );
};

export const query = graphql`
  fragment BlogPost on ContentfulBlogPostConnection {
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
`;

export { BlogList };
