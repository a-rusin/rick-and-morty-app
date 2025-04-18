import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App";
import "./index.css";
import "@mantine/core/styles.css";
import { AuthProvider } from "./context/authContext";
import * as serviceWorkerRegistration from "./services/serviceWorker.service";

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MantineProvider>
  </BrowserRouter>
);

serviceWorkerRegistration.LocalServiceWorkerRegister();
