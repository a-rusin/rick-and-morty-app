import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App";
import "./index.css";
import "@mantine/core/styles.css";
import { AuthProvider } from "./context/authContext";

const theme = createTheme({
  fontFamily:
    "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
  other: {
    mainContainerWidth: "900px",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
      withGlobalStyles
      withNormalizeCSS
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </MantineProvider>
  </BrowserRouter>
);
