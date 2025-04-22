import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="h1" component="h2" sx={{ fontSize: 36 }}>
        Welcome to our ToDo List app!
      </Typography>
    </Box>
  );
};

export default HomePage;
