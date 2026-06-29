// Sidebar.jsx - existing code unchanged, mobile drawer support added via className only
import { Link, NavLink } from "react-router-dom";
import {
  administrationItems,
  managementItems,
} from "../../Config/navigationConfig";
import Home from "../../assets/home.svg";
import { useSelector } from "react-redux";
import HomeActive from "../../assets/home_a.svg";

export default function Sidebar({
  isCollapsed,
  isMobileDrawerOpen,
  onMobileDrawerClose,
}) {
  // const role = "Admin";
  const role = useSelector((state) => state.auth.role);
  const administrationMenu = administrationItems().filter((item) =>
    item.roles.includes(role),
  );

  const managementMenu = managementItems().filter((item) =>
    item.roles.includes(role),
  );

  return (
    <aside
      className={`position-fixed sidebar main-height text-bluegrey transition-all d-flex flex-column z-2 overflow-hidden ${isCollapsed ? "sidebar-collapse wd-80" : "wd-160"} ${isMobileDrawerOpen ? "sidebar-drawer--open wd-80" : ""}`}
      style={{
        top: "var(--header-height)",
      }}
    >
      <nav className="d-flex flex-column sidebar-nav">
        <NavLink
          to="/dashboard"
          end
          onClick={onMobileDrawerClose}
          className={({ isActive }) =>
            `sidebar-navitem d-flex align-items-center ${isActive ? "active" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? HomeActive : Home}
                alt="Home"
                style={{ flexShrink: 0 }}
              />
              {!isCollapsed && <div className="label">Home</div>}
            </>
          )}
        </NavLink>

        {/* Management Section */}
        <div className="sub-list padt-25 padb-20">
          {!isCollapsed && (
            <p className="padl-24 marb-6 fw-semibold">Management</p>
          )}
          <div className="d-flex flex-column gap-1">
            {managementMenu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                title={isCollapsed ? item.label : ""}
                onClick={onMobileDrawerClose}
                className={({ isActive }) =>
                  `sidebar-navitem d-flex align-items-center py-2 ${isActive ? "active" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      alt={item.label}
                      style={{ flexShrink: 0 }}
                    />
                    {!isCollapsed && (
                      <div className="label transition-all">{item.label}</div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Administration Section */}
        <div className="sub-list padt-5 padb-20">
          {administrationMenu.length > 0 && (
            <div>
              {!isCollapsed && (
                <p className="padl-24 marb-6 fw-semibold">Administration</p>
              )}
              <div className="d-flex flex-column gap-1">
                {administrationMenu.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    title={isCollapsed ? item.label : ""}
                    onClick={onMobileDrawerClose}
                    className={({ isActive }) =>
                      `sidebar-navitem d-flex align-items-center py-2 ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? item.activeIcon : item.icon}
                          alt={item.label}
                          style={{ flexShrink: 0 }}
                        />
                        {!isCollapsed && (
                          <div className="label">{item.label}</div>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
