import { Box, Typography } from "@mui/material";
import CustomForm from "../components/CustomForm";

const AddTodo = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontSize: 36, mb: "20px", textAlign: "center" }}
      >
        Add new todo to your list
      </Typography>
      <CustomForm />
    </Box>
  );
};

export default AddTodo;
