import { CssBaseline, ThemeProvider } from "@mui/material";
import { App } from "./App";
import { useAppTheme } from "./useAppTheme";

export const Root = () => {
  const theme = useAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
