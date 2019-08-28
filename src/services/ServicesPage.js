import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const ServicesPage = () => (
  <div>
    <Drawer>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button style={{ paddingLeft: 32 }}>
          <ListItemText primary="Anti-Corrosion" />
        </ListItem>
        <ListItem button style={{ paddingLeft: 32 }}>
          <ListItemText primary="Sealants" />
        </ListItem>
        <ListItem button style={{ paddingLeft: 32 }}>
          <ListItemText primary="Composites" />
        </ListItem>
        <ListItem button style={{ paddingLeft: 32 }}>
          <ListItemText primary="Fire and Blast" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Team" />
        </ListItem>
      </List>
    </Drawer>
  </div>
);

export default ServicesPage;
