import { Autocomplete, TextField } from "@mui/material";

const CustomAutocomplete = ({ setPriority, priority }) => {
  const options = ["High", "Medium", "Low"];
  return (
    <Autocomplete
      sx={{ width: 400 }}
      options={options}
      value={priority}
      onChange={(e, newValue) => setPriority(newValue)}
      renderInput={(params) => <TextField {...params} label="Priority" />}
    />
  );
};

export default CustomAutocomplete;
