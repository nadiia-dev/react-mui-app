import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const CustomForm = ({ curTask }) => {
  const today = new Date();
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    id: curTask?.id ?? Math.floor(Math.random() * 1001),
    text: curTask?.text ?? "",
    priority: curTask?.priority ?? "",
    createdAt: curTask?.createdAt ?? today,
    completed: curTask?.completed ?? false,
  });

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempTasks = [...tasks];
    if (!curTask) {
      tempTasks.splice(tempTasks.length, 0, formData);
    } else {
      const index = tempTasks.findIndex((task) => task.id === curTask.id);
      tempTasks.splice(index, 1, formData);
    }
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Typography variant="h1" component="h2" sx={{ fontSize: 36 }}>
        Add new todo to your list
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", md: "400px" },
          mx: "auto",
          marginTop: "20px",
        }}
      >
        <FormControl>
          <TextField
            label="Text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            fullWidth
          />
        </FormControl>
        <FormControl>
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            label="Priority"
            labelId="priority-label"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CustomForm;
