import { Box, IconButton, Modal } from "@mui/material";
import CustomForm from "./CustomForm";
import ClearIcon from "@mui/icons-material/Clear";

const CustomModal = ({ open, handleClose, curTask }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: "full" }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <ClearIcon />
        </IconButton>
        <CustomForm curTask={curTask} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
