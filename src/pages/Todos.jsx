import { Box, Tab, Tabs, Typography } from "@mui/material";
import CustomAutocomplete from "../components/CustomAutocomplete";
import CustomTable from "../components/CustomTable";
import { useEffect, useState } from "react";
import CustomCardsGrid from "../components/CustomCardsGrid";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Todos = () => {
  const [priority, setPriority] = useState("");
  const [globalTodos, setGlobalTodos] = useState([]);

  useEffect(() => {
    setGlobalTodos(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  const todos = priority
    ? globalTodos.filter((task) => task.priority === priority)
    : globalTodos;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
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
      </Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          margin: "20px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            [`&.Mui-selected`]: {
              color: (theme) => theme.palette.primary.main,
            },
            [`&:not(.Mui-selected)`]: {
              color: (theme) => theme.palette.color.paper,
            },
          }}
        >
          <Tab label="Todos table" {...a11yProps(0)} />
          <Tab label="Todos cards" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CustomTable tasks={todos} onToggle={setGlobalTodos} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CustomCardsGrid tasks={todos} />
      </CustomTabPanel>
    </>
  );
};

export default Todos;
