import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { App } from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useAppTheme } from "./useAppTheme";
import "./i18n/i18n";
import { Root } from "./Root";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
