import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import { AlertDialogProvider } from "./context/AlertDialogContext";
import { DialogProvider } from "./context/DialogContext ";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AlertDialogProvider>
        <DialogProvider>
          <App />
        </DialogProvider>
      </AlertDialogProvider>
    </Router>
  </StrictMode>
);
