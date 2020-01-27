import React from "react";
import { withStyles, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "inline"
  }
};

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={props.classes.root}>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Anti-Corrosion</MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/services/composites"
        >
          Composites
        </MenuItem>
        <MenuItem onClick={handleClose}>Fire & Blast</MenuItem>
        <MenuItem onClick={handleClose}>Sealants</MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(SimpleMenu);
