import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const CustomDrawer = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/todos">
            <ListItemIcon>
              <ChecklistRtlIcon />
            </ListItemIcon>
            <ListItemText primary="All todos" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/newTodo">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add todo form" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
