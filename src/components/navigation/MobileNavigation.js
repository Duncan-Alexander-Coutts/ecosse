import React, { useState } from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import Logo from "../common/Logo";
import { navigationItems } from "./navigation-constants";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: theme.palette.common.white,
    marginRight: theme.spacing()
  },
  logo: {
    padding: theme.spacing(2)
  },
  indent: {
    padding: theme.spacing(0, 0, 0, 2)
  }
}));

const MobileNavigation = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const renderItems = (items, shouldIndent) => (
    <List className={classNames({ [classes.indent]: shouldIndent })}>
      {items &&
        items.map(item => (
          <>
            {!shouldIndent && <Divider />}
            <ListItem
              component={Link}
              to={item.link}
              button
              onClick={() => setIsOpen(false)}
              key={item.label}
            >
              <ListItemText primary={item.label} />
            </ListItem>

            {item.children && renderItems(item.children, true)}
          </>
        ))}
    </List>
  );

  return (
    <>
      <IconButton
        onClick={() => setIsOpen(true)}
        className={classes.menuButton}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        {renderItems(navigationItems)}
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigation;
