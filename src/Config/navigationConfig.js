import userActiveIcon from "../assets/users_a.svg";
import userIcon from "../assets/users.svg";
import alertsActiveIcon from "../assets/alerts_a.svg";
import alertsIcon from "../assets/alerts.svg";
import auditLogos from "../assets/logs.svg";
import auditLogosActive from "../assets/Audit_Log_Active.svg";

export const managementItems = () => [
  {
    label: "Audit Logs",
    path: "/dashboard/audit-logs",
    icon: auditLogos,
    activeIcon: auditLogosActive,
    roles: ["Admin"],
  },
  {
    label: "Alerts",
    path: "/dashboard/alerts",
    icon: alertsIcon,
    activeIcon: alertsActiveIcon,
    roles: ["PropertyOwner", "Tenant", "Admin"],
  },
];

export const administrationItems = () => [
  {
    label: "Users",
    path: "/dashboard/users",
    icon: userIcon,
    activeIcon: userActiveIcon,
    roles: ["Admin"],
  },
];
