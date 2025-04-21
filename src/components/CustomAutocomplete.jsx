import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { tasks } from "../data/dummy-data";

const CustomAutocomplete = () => {
  const [priority, setPriority] = useState("");
  const options = ["High", "Medium", "Low"];
  const todos = tasks.filter((task) => task.priority === priority);
  console.log(todos);
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={options}
      value={priority}
      onChange={(e, newValue) => setPriority(newValue)}
      renderInput={(params) => <TextField {...params} label="Priority" />}
    />
  );
};

export default CustomAutocomplete;
