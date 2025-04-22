import {
  Button,
  ButtonGroup,
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import CustomModal from "./CustomModal";

const CustomTable = ({ tasks, onToggle }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [curTask, setCurTask] = useState();

  const getCurTask = (id) => {
    const cur = tasks.find((task) => String(task.id) === id);
    setCurTask(cur);
  };

  const handleOpenDialog = (e) => {
    getCurTask(e.currentTarget.getAttribute("data-id"));
    setOpenDialog(true);
  };

  const handleOpenModal = (e) => {
    getCurTask(e.currentTarget.getAttribute("data-id"));
    setOpenModal(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e, row) => {
    const updatedTodos = tasks.map((task) =>
      task.id === row.id ? { ...task, completed: e.target.checked } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTodos));
    onToggle(updatedTodos);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="to do list">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Task</TableCell>
              <TableCell align="right">Completed</TableCell>
              <TableCell align="right">CreatedAt</TableCell>
              <TableCell align="right">Priority</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                <TableCell align="center">
                  <ButtonGroup disableElevation variant="contained">
                    <Button
                      data-id={row.id}
                      onClick={(e) => handleOpenModal(e)}
                    >
                      <EditIcon
                        sx={{
                          color: (theme) => theme.palette.background.paper,
                        }}
                      />
                    </Button>
                    <Button
                      data-id={row.id}
                      onClick={(e) => handleOpenDialog(e)}
                    >
                      <DeleteIcon
                        sx={{
                          color: (theme) => theme.palette.background.paper,
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        curTask={curTask}
      />
      <CustomModal
        open={openModal}
        handleClose={handleCloseModal}
        curTask={curTask}
      />
    </>
  );
};

export default CustomTable;
