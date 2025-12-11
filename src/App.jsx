import axios from "axios";
import { Routes, Route } from "react-router-dom";

// containers
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";
import Event from "./containers/Event.jsx";
import Login from "./containers/Login.jsx";
import Register from "./containers/Register.jsx";

// components
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import ToastProvider from "./components/ToastProvider.jsx";

export default function App() {
  try {
    const raw = localStorage.getItem("user");
    const token = raw ? JSON.parse(raw)?.token : null;
    axios.defaults.headers.common["Authorization"] = token ?? "";
  } catch {
    axios.defaults.headers.common["Authorization"] = "";
  }

  const getStoredToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user?.token || null;
  };

  const setAuthHeader = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  setAuthHeader(getStoredToken());

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/evento/:id" element={<Event />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
        </Route>
        <Route
          path="*"
          element={<div className="p-6 text-white">Página não encontrada</div>}
        />
      </Routes>
      <ToastProvider />
    </>
  );
}
