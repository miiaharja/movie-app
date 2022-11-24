import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const MovieCard = () => {
  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const value = 3.5;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Movie title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Name
          </Typography>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 2, display: "inline-block" }}>{labels[value]}</Box>
          <Typography variant="body2" color="text.secondary">
            Nov 15, 2022
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
