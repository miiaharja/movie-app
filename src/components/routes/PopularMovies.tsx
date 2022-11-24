import { Box, Container } from "@mui/material";
import { margin } from "@mui/system";
import { MovieCard } from "../layout/MovieCard";

export const PopularMovies = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          columnGap: 1.5,
          rowGap: 2,
          my: 5,
        }}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Box>
    </Container>
  );
};
