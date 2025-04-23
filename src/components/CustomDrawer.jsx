import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const CustomDrawer = ({ open, toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const DrawerList = (
    <Box sx={{ width: 239 }} role="presentation" onClick={toggleDrawer}>
      <Toolbar />
      <Typography
        variant="h3"
        component="p"
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
          mb: "20px",
          textAlign: "center",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        ToDo List
      </Typography>
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
      <Drawer
        anchor="left"
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            height: "100%",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
