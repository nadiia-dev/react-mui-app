import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

const CustomCardsGrid = ({ tasks }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginBottom: "20px" }}
    >
      {tasks.map((task) => (
        <Grid key={task.id} item xs={12} sm={6} lg={3}>
          <CustomCard task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCardsGrid;
