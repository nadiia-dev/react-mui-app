import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

const priorities = [
  {
    value: "High",
    label: "High",
    icon: <PriorityHighIcon sx={{ color: "#d32f2f" }} />,
    color: "#d32f2f",
  },
  {
    value: "Medium",
    label: "Medium",
    icon: <ReportProblemIcon sx={{ color: "#ed6c02" }} />,
    color: "#ed6c02",
  },
  {
    value: "Low",
    label: "Low",
    icon: <LowPriorityIcon sx={{ color: "#2e7d32" }} />,
    color: "#2e7d32",
  },
];

const CustomForm = ({ curTask }) => {
  const today = new Date();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState({ text: "", priority: "" });
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
    if (error[e.target.name]) {
      setError((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.text) {
      newErrors.text = "Please enter task text";
    }

    if (!formData.priority) {
      newErrors.priority = "Please choose task priority";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    const tempTasks = [...tasks];
    if (!curTask) {
      tempTasks.splice(tempTasks.length, 0, formData);
    } else {
      const index = tempTasks.findIndex((task) => task.id === curTask.id);
      tempTasks.splice(index, 1, formData);
    }
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
    e.reset();
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
        <FormControl required fullWidth>
          <TextField
            label="Text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            error={Boolean(error.text)}
            helperText={error.text}
          />
        </FormControl>
        <FormControl required fullWidth>
          <TextField
            select
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            error={Boolean(error.priority)}
            helperText={error.priority}
            sx={{
              color: priorities.find((p) => p.value === formData.priority)
                ?.color,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: priorities.find(
                  (p) => p.value === formData.priority
                )?.color,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.primary.main,
              },
            }}
          >
            {priorities.map((priority) => (
              <MenuItem key={priority.value} value={priority.value}>
                <Box display="flex" alignItems="center" gap={1}>
                  {priority.icon}
                  <Typography>{priority.label}</Typography>
                </Box>
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CustomForm;
