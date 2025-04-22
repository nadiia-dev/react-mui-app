import { Box, Typography } from "@mui/material";
import CustomAutocomplete from "./components/CustomAutocomplete";
import CustomTable from "./components/CustomTable";
import { useState } from "react";
import { tasks } from "./data/dummy-data";
import CustomForm from "./components/CustomForm";

function App() {
  const [priority, setPriority] = useState("");
  const [globalTodos, setGlobalTodos] = useState(tasks);
  const todos = priority
    ? globalTodos.filter((task) => task.priority === priority)
    : globalTodos;

  return (
    <>
      <CustomForm setTodos={setGlobalTodos} />
      <Box
        component="section"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h2" sx={{ fontSize: 36 }}>
          To Do List
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: 20, fontFamily: "sans-serif" }}
        >
          Filter todos by priority
        </Typography>
        <CustomAutocomplete setPriority={setPriority} priority={priority} />
        <CustomTable tasks={todos} onToggle={setGlobalTodos} />
      </Box>
    </>
  );
}

export default App;
