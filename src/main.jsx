import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";

// Import SCORM scripts
import "./assets/scorm/APIWrapper.js";
import "./assets/scorm/SCOFunctions.js";
import "./assets/scorm/SCOApp.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
