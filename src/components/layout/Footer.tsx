import { Box, Container } from "@mui/material";
import { useAppTheme } from "../../useAppTheme";

export const Footer = () => {
  const theme = useAppTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.dark, width: "100%", height: 200, mt: "auto" }}>
      <Container maxWidth="xl">
        <Box>Footer</Box>
      </Container>
    </Box>
  );
};
