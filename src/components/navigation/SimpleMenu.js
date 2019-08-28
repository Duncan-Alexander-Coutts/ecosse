import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core";

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
        <MenuItem onClick={handleClose}>Composites</MenuItem>
        <MenuItem onClick={handleClose}>Fire & Blast</MenuItem>
        <MenuItem onClick={handleClose}>Sealants</MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(SimpleMenu);
