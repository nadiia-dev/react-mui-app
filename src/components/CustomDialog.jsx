import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import React from "react";

const CustomDialog = ({ open, handleClose, curTask }) => {
  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const toDelete = tasks.filter((task) => task.id !== curTask.id);
    localStorage.setItem("tasks", JSON.stringify(toDelete));
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"Are you sure you want to delete this task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action can`t be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
          <Button onClick={handleDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
