import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navigationItems } from "./navigation-constants";

const DesktopNavigation = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, children) => {
    if (children.children) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderChildren = children => {
    if (!children) return null;

    return (
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {children.map(child => (
          <MenuItem onClick={handleClose} component={Link} to={child.link}>
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  return (
    <div>
      {navigationItems.map(item => {
        return (
          <>
            <Button
              component={Link}
              to={item.link}
              onClick={event => handleClick(event, item)}
              size="large"
            >
              {item.label}
            </Button>
            {renderChildren(item.children)}
          </>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
