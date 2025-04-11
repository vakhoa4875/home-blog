import "@flaticon/flaticon-uicons/css/all/all.css"; // Icons
import "primereact/resources/primereact.min.css"; // Core CSS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    {/* Same as */}
    <ToastContainer />
  </StrictMode>
);
