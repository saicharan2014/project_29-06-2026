// DashboardLayout.jsx

import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DashboardFilterProvider } from "../../context/DashboardFilterContext";
import { DashboardTabProvider } from "../../context/DashboardTabContext";
import Sidebar from "./Sidebar";

// import { DashboardFilterProvider } from "../../context/DashboardFilterContext";
// import { AlertsFilterProvider } from "../../context/AlertsFilterContext";
// import { GlobalFilterProvider } from "../../context/GlobalFilterContext";
// import { CardFilterProvider } from "../../context/CardFilterContext";

export default function DashboardLayout() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      document.body.classList.add("bg-edy-white-alt");
    } else {
      document.body.classList.remove("bg-edy-white-alt");
    }
    return () => document.body.classList.remove("bg-edy-white-alt");
  }, [isLoggedIn]);

  return (
    // <DashboardFilterProvider>
    // <GlobalFilterProvider>
    //   <CardFilterProvider>
    <DashboardTabProvider>
      {/* //       <AlertsFilterProvider> */}
      <>
        <HeaderLayout onMenuClick={() => setIsMobileDrawerOpen((v) => !v)} />

        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobileDrawerOpen={isMobileDrawerOpen}
          onMobileDrawerClose={() => setIsMobileDrawerOpen(false)}
        />

        {isMobileDrawerOpen && (
          <div
            className="sidebar-backdrop d-lg-none"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
        )}

        <button
          onClick={() => setIsSidebarCollapsed((v) => !v)}
          className="position-fixed tbutton bg-white border-0 d-none d-lg-flex align-items-center justify-content-center"
        >
          {isSidebarCollapsed ? (
            <ChevronRight size={15} className="text-bluegrey" />
          ) : (
            <ChevronLeft size={15} className="text-bluegrey" />
          )}
        </button>

        <main
          className="overflow-hidden z-1 w-100 bg-edy-lytpink vh-100 position-relative"
          style={{
            paddingLeft: isSidebarCollapsed ? "80px" : "160px",
            paddingTop: "var(--header-height)",
            transition: "padding-left 0.3s ease",
          }}
        >
          <style>{`
              @media (max-width: 991.98px) {
                main { padding-left: 0 !important; }
              }
            `}</style>
          <div className="main-layout-wrapper padx-20 padx-lg-65 padx-md-25 padt-20 padt-lg-60 padt-md-25 padb-140 bg-edy-lavender overflow-hidden overflow-y-scroll vh-100 d-flex flex-column gap-3">
            <Outlet />
          </div>
        </main>
      </>
      {/* //       </AlertsFilterProvider> */}
      //{" "}
    </DashboardTabProvider>
    //     {/* </DashboardFilterProvider>
    //      */}
    //   </CardFilterProvider>
    // </GlobalFilterProvider>
  );
}
