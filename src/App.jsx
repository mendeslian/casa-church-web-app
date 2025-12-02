import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Events />} />
      </Route>

      <Route
        path="/login"
        element={<div className="p-6 text-white">Login</div>}
      />
      <Route
        path="*"
        element={<div className="p-6 text-white">Página não encontrada</div>}
      />
    </Routes>
  );
}
