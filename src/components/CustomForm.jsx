import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const CustomForm = ({ setTodos }) => {
  const today = new Date();
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1001),
    text: "",
    priority: "",
    createdAt: today,
    completed: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, formData]);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "400px",
        mx: "auto",
      }}
    >
      <TextField
        label="Text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        required
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="priority"
        value={formData.priority}
        label="Priority"
        onChange={handleChange}
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default CustomForm;
