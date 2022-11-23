import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import React from "react";
import { useColorModeContext } from "./providers/ColorModeProvider";

const primaryMain = "#A6CF98";
const primaryDark = "#557C55";
const secondaryMain = "#DB6B97";

export const useAppTheme = () => {
  const { colorMode } = useColorModeContext();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let mode: PaletteMode = "dark";

  if (colorMode === "system") {
    mode = prefersDarkMode ? "dark" : "light";
  } else {
    mode = colorMode;
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: primaryDark,
              },
            },
          },
        },
        palette: {
          primary: {
            main: primaryMain,
            dark: primaryDark,
            light: "#F2FFE9",
          },
          secondary: {
            main: secondaryMain,
          },
          mode,
        },
      }),
    [mode],
  );
  return theme;
};
