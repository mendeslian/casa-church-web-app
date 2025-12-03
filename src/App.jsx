import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";
import Event from "./containers/Event.jsx";
import Login from "./containers/Login.jsx";
import Register from "./containers/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/evento/:id" element={<Event />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route
        path="*"
        element={<div className="p-6 text-white">Página não encontrada</div>}
      />
    </Routes>
  );
}
