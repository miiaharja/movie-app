import { Box } from "@mui/material";
import { MovieCard } from "../layout/MovieCard";

export const PopularMovies = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        columnGap: 1.5,
        rowGap: 2,
      }}
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Box>
  );
};
