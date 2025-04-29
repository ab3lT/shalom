import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute({ children, roles = [] }) {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" />;
    if (roles.length && !roles.includes(user.role)) return <Navigate to="/" />;

    return children;
}
