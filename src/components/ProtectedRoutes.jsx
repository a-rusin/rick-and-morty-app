import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function ProtectedRoutes({ children }) {
  const { user } = useAuth();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}
