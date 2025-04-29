import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles, children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.role && allowedRoles.includes(auth.role) ? (
    children
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;