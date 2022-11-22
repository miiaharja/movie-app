import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};
