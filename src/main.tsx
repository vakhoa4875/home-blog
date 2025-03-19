import "@flaticon/flaticon-uicons/css/all/all.css"; // Icons
import "primereact/resources/primereact.min.css"; // Core CSS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
