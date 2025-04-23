import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../components/CustomDrawer";
import { use, useState } from "react";
import { ColorModeContext } from "../heplers/ColorModeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 240;

const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { toggleColorMode } = use(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="fixed"
        sx={{
          height: "64px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
            </>
          )}
          <IconButton
            onClick={toggleColorMode}
            sx={{ position: { sm: "absolute" }, right: { sm: "20px" } }}
          >
            {theme.palette.mode === "light" ? <BedtimeIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
