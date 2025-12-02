import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./containers/HomePage.jsx";
// import Dashboard from "../pages/Dashboard.jsx";
// import Login from "../pages/Login.jsx";
// import NotFound from "../pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute>{/* <Dashboard /> */}</ProtectedRoute>}
      />
      {/* <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
