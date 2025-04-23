import { Box, IconButton, Modal, Typography } from "@mui/material";
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
    width: { xs: "90%", md: "500px" },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <ClearIcon />
        </IconButton>
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: 36, mb: "10px", textAlign: "center" }}
        >
          Edit todo
        </Typography>
        <CustomForm curTask={curTask} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
