import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "normalize.css";
import "./styles/tailwind.css";
import "./styles/globals.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
