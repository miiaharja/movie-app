import { createTheme } from "@mui/material";
import React from "react";

const secondaryMain = "#DB6B97";

export const useAppTheme = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: secondaryMain,
              },
            },
          },
        },
        palette: {
          primary: {
            main: "#A6CF98",
            dark: "#557C55",
            light: "#F2FFE9",
          },
          secondary: {
            main: secondaryMain,
          },
        },
      }),
    [],
  );
  return theme;
};
