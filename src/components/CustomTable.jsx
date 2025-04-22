import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { formatDate } from "../heplers/formatDate";

const CustomTable = ({ tasks, onToggle }) => {
  const handleChange = (e, row) => {
    const updatedTodos = tasks.map((task) =>
      task.id === row.id ? { ...task, completed: e.target.checked } : task
    );
    onToggle(updatedTodos);
  };

  return (
    <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="to do list">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Task</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">CreatedAt</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.completed}
                  onChange={(e) => handleChange(e, row)}
                />
              </TableCell>
              <TableCell align="right">{formatDate(row.createdAt)}</TableCell>
              <TableCell align="right">{row.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
