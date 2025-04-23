import {
  Button,
  ButtonGroup,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { formatDate } from "../heplers/formatDate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import CustomModal from "./CustomModal";

const StyledCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
            <StyledRow>
              <StyledCell>Id</StyledCell>
              <StyledCell align="right">Task</StyledCell>
              <StyledCell align="right">Completed</StyledCell>
              <StyledCell align="right">CreatedAt</StyledCell>
              <StyledCell align="right">Priority</StyledCell>
              <StyledCell align="center">Actions</StyledCell>
            </StyledRow>
          </TableHead>
          <TableBody>
            {tasks.map((row, index) => (
              <StyledRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledCell component="th" scope="row">
                  {index + 1}
                </StyledCell>
                <StyledCell align="right">{row.text}</StyledCell>
                <StyledCell align="right">
                  <Checkbox
                    checked={row.completed}
                    onChange={(e) => handleChange(e, row)}
                  />
                </StyledCell>
                <StyledCell align="right">
                  {formatDate(row.createdAt)}
                </StyledCell>
                <StyledCell align="right">{row.priority}</StyledCell>
                <StyledCell align="center">
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
                </StyledCell>
              </StyledRow>
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
