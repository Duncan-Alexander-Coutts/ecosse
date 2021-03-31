import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import { CONTENT_MAX_WIDTH } from "../../../constants";
import { BlogList } from "../../blog-list/BlogList";
import { SectionTitle } from "../../section-title/SectionTitle";

const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    maxWidth: CONTENT_MAX_WIDTH,
    justifyContent: "center",
  },
  seeAllPosts: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HomeBlog = ({ posts }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SectionTitle title="Blog" />
      <BlogList posts={posts} itemsPerRow={2} />
      <Link className={classes.seeAllPosts} to="/blog/">
        <Typography variant="h2">See all Posts</Typography>
      </Link>
    </div>
  );
};

export { HomeBlog };
