import { Box } from "@mui/material";
import { Container, margin } from "@mui/system";
import { useAppTheme } from "../../useAppTheme";

export const Footer = () => {
  const theme = useAppTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.dark, width: "100%", height: 200 }}>
      <Container maxWidth="xl">
        <Box>Footer</Box>
      </Container>
    </Box>
  );
};
