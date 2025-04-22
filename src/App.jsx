import { Box } from "@mui/material";
import CustomAutocomplete from "./components/CustomAutocomplete";
import CustomTable from "./components/CustomTable";
import { useState } from "react";
import { tasks } from "./data/dummy-data";

function App() {
  const [priority, setPriority] = useState("");
  const [globalTodos, setGlobalTodos] = useState(tasks);
  const todos = priority
    ? globalTodos.filter((task) => task.priority === priority)
    : globalTodos;

  return (
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
      <CustomAutocomplete setPriority={setPriority} priority={priority} />
      <CustomTable tasks={todos} onToggle={setGlobalTodos} />
    </Box>
  );
}

export default App;
