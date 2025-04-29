import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./components/ProtectedRoute";
import { Roles } from "./roles/roles";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/change-password" element={<ChangePassword />} />
          {/* <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
          {/* <Route path="/bookings" element={<ProtectedRoute roles={[Roles.ADMIN, Roles.RECEPTIONIST]}><Bookings /></ProtectedRoute>} /> */}
          {/* <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}