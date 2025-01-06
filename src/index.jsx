import "./global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { MyAiReportLanding } from "./screens/MyAiReportLanding";

const theme = createTheme({
  palette: {
    primary: {
      main: '#168118', // Example of a custom primary color
    },
    secondary:{
      main: '#168118'
    }
  },
});
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <MyAiReportLanding />
    </ThemeProvider>
  </StrictMode>,
);
