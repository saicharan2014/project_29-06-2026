import KeyFigures from "../../Components/KeyFigures/KeyFigures";

import DashboardTabs from "./DashboardTabs";
import DashboardTabContent from "./DashboardTabContent";

import AlertPopUp from "../../Components/AlertsPopUp/AlertsPopUp";
import { useQuery } from "@tanstack/react-query";
// import { getAlerts } from "../../apis/AlertsApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import ConfirmPopup from "../../components/common/ConfirmDeleteToast";
// import UnauthorizedPopup from "../../components/UnauthorizedPopup/UnauthorizedPopup";
const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showUnauthorized, setShowUnauthorized] = useState(
    location.state?.unauthorized || false,
  );
  // const [deniedAccess, setDeniedAccess] = useState(
  //   location.state?.deniedAccess || null,
  // );
  // const [deniedAccess, setDeniedAccess] = useState(null);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["alerts"],
  //   queryFn: () => getAlerts(),
  //   staleTime: 2 * 60 * 1000,
  //   cacheTime: 5 * 60 * 1000,
  //   placeholderData: (prev) => prev,
  // });
  // console.log(message, "message");
  // useEffect(() => {
  //   const message = localStorage.getItem("deniedAccessMessage");

  //   if (message) {
  //     setDeniedAccess(message);

  //     // clear after reading (important)
  //     localStorage.removeItem("deniedAccessMessage");
  //   }
  // }, []);
  useEffect(() => {
    if (location.state?.unauthorized) {
      //  Clear the state from history so refresh doesn't re-trigger it
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, []);
  return (
    <>
      {/* {showUnauthorized && (
        <UnauthorizedPopup
          show={showUnauthorized}
          onClose={() => setShowUnauthorized(false)}
        />
      )} */}
      {/* {deniedAccess && (
        <UnauthorizedPopup
          show={deniedAccess}
          message={"Please logout to access this page."}
          onClose={() => setDeniedAccess(false)}
        />
      )} */}
      <div>
        <div className="d-flex align-items-center justify-content-between marb-10 marb-lg-35">
          <h1 className="mb-0 page-title fs-20 fs-lg-36 text-edy-deepblue ">
            Analytics Hub
          </h1>
          {/* {!isLoading && data?.data?.length > 0 && (
            <AlertPopUp isLoading={isLoading} data={data} />
          )} */}
        </div>
        <KeyFigures />
        <DashboardTabs />
        <DashboardTabContent />
      </div>
    </>
  );
};

export default Dashboard;
