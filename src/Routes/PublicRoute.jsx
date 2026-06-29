import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function PublicRoute() {
  //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  const publicPaths = ["/", "/create-password", "/forgot-password"];

  const isPublicRoute = publicPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  //  Allow public routes ALWAYS
  if (isPublicRoute) {
    return <Outlet />;
  }

  //  Redirect logged-in users for other routes
  //   if (isLoggedIn) {
  //     return <Navigate to="/dashboard" replace />;
  //   }

  return <Outlet />;
}
