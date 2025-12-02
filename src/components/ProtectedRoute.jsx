import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let isAuthenticated = false;
  try {
    const raw = localStorage.getItem("user");
    if (raw) {
      const user = JSON.parse(raw);
      isAuthenticated = Boolean(user?.token);
    }
  } catch {
    isAuthenticated = false;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
