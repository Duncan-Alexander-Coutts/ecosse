import React, { useState } from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Link,
  ListSubheader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Logo from "../common/Logo";
import { navigationItems } from "./navigation-constants";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: theme.palette.common.white,
    marginRight: theme.spacing(),
  },
  logo: {
    padding: theme.spacing(2),
  },
  indent: {
    padding: theme.spacing(0, 0, 0, 2),
  },
  ul: {
    padding: 0,
  },
}));

const MobileNavigation = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const renderClickableItem = (item, level) => (
    <ListItem
      button
      component={Link}
      href={item.link}
      onClick={() => setIsOpen(false)}
      key={item.label}
      style={{ paddingLeft: 16 + level * 8 }}
    >
      <ListItemText primary={item.label} />
    </ListItem>
  );

  const renderGroup = (item, level) => (
    <li key={item.label}>
      <ul style={{ paddingLeft: level * 8 }}>
        <ListSubheader>{item.label}</ListSubheader>
        {renderItems(item.children, level + 1)}
      </ul>
    </li>
  );

  const renderItems = (items, level) =>
    items.map((item) =>
      item.children
        ? renderGroup(item, level)
        : renderClickableItem(item, level)
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
        <List>{renderItems(navigationItems, 0)}</List>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigation;
