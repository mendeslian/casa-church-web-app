import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./containers/HomePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
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
