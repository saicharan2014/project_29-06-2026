import { Routes, Route } from "react-router";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import CreatePassword from "../Pages/Auth/CreatePassword";
import AuditLogs from "../Pages/AuditLogs/AuditLogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Users/Users";
import Alerts from "../Pages/Alerts/Alerts";
import UserEditor from "../Pages/UserEditor/UserEditor";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ResetPassword from "../Pages/Auth/ResetPassword";
import AuthPageNotFound from "../Pages/Auth/AuthPageNotFound";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../Layout/DashboardLayouts/DashboardLayout";
const AppRoutes = () => {
  const authRoutingObjects = [
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "create-password",
      element: <CreatePassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "*",
      element: <AuthPageNotFound />,
    },
  ];
  const privateRoutingObjects = [
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "alerts",
      element: <Alerts />,
    },
    {
      path: "audit-logs",
      element: <AuditLogs />,
    },
    {
      path: ":module/add",
      element: <UserEditor />,
    },
    {
      path: ":module/edit/:id",
      element: <UserEditor />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          {authRoutingObjects.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          {privateRoutingObjects.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
