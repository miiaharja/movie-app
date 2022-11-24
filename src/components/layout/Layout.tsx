import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <Box sx={{ height: "100vh", display: "grid", gridTemplateRows: "min-content auto min-content" }}>
      <Header />
      <Box component="main">
        <Container maxWidth="xl" sx={{ p: 5 }}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
