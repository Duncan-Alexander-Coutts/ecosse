import React, { useState } from "react";
import { Button, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navigationItems } from "./navigation-constants";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(),
  },
  navButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    fontWeight: "bold",
  },
  childButton: {
    width: "100%",
    textTransform: "uppercase",
  },
}));

const DesktopNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event, children) => {
    if (children.children) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderChildren = (children) => {
    if (!children) return null;

    return (
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {children.map((child) => (
          <MenuItem
            key={child.label}
            onClick={handleClose}
            to={child.link}
            className={classes.childButton}
            component={Link}
          >
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  return (
    <div className={classes.container}>
      {navigationItems.map((item) => {
        return (
          <div key={item.label}>
            <Button
              className={classes.navButton}
              variant="outlined"
              component={item.link ? Link : undefined}
              to={item.link || ""}
              onClick={(event) => handleClick(event, item)}
              size="large"
            >
              {item.label}
            </Button>
            {renderChildren(item.children)}
          </div>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
