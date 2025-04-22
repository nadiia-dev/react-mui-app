import { Card, CardContent, Chip, Typography } from "@mui/material";

const CustomCard = ({ task }) => {
  return (
    <>
      <Card
        sx={{
          width: "350px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {task.text}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            Created at: {new Date(task.createdAt).toLocaleDateString()}
          </Typography>
          <Chip
            label={task.priority}
            color={
              task.priority === "High"
                ? "error"
                : task.priority === "Medium"
                ? "warning"
                : "success"
            }
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}
          >
            {task.completed ? "Completed" : "Pending"}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
