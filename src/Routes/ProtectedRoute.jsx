import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const role = useSelector((state) => state.auth.role);

  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  const routeRoles = {
    "/dashboard/users": ["Admin"],
    "/dashboard/audit-logs": ["Admin"],
    "/dashboard/alerts": ["PropertyOwner", "Tenant", "Admin"],
  };

  const currentPath = location.pathname;

  const matchedRoute = Object.keys(routeRoles).find((route) =>
    currentPath.startsWith(route),
  );

  if (matchedRoute) {
    const allowedRoles = routeRoles[matchedRoute];

    if (!allowedRoles.includes(role)) {
      return (
        <Navigate to="/dashboard" replace state={{ unauthorized: true }} />
      );
    }
  }

  return <Outlet />;
}
