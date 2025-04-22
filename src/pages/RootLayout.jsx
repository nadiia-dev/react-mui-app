import { Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../components/CustomDrawer";
import { use, useState } from "react";
import { ColorModeContext } from "../heplers/ColorModeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { toggleColorMode } = use(ColorModeContext);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <IconButton onClick={toggleColorMode}>
              {theme.palette.mode === "light" ? (
                <BedtimeIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
      <Outlet />
    </>
  );
};

export default RootLayout;
