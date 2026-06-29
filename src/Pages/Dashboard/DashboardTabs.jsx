import { useContext, useEffect } from "react";
import DashboardTabContext from "../../Context/DashboardTabContext";
// import { useSelector } from "react-redux";
// import { useQuery } from "@tanstack/react-query";
// import { getPropertiesData } from "../../../apis/PropertiesApis";
// import { useSelector } from "react-redux";
// import DashboardFilterContext from "../../../context/DashboardFilterContext";
// import buildCityPropertyParams from "../../../utils/buildCityPropertyParams";
// import { usePropertyAccess } from "../../../hooks/usePropertyAccess";
// import { GlobalFilterContext } from "../../../context/GlobalFilterContext";

export default function DashboardTabs() {
  const { activeTab, setActiveTab } = useContext(DashboardTabContext) ?? {};
  // const { draftGlobalFilters } = useContext(DashboardFilterContext);
  //   const { draftGlobalFilters } = useContext(GlobalFilterContext);

  // const role = useSelector((state) => state.auth.role);
  // const role = "Admin";
  // const isAdmin = role === "Admin";
  // const isPropertyOwner = role === "PropertyOwner";
  // const isTenant = role === "Tenant";
  // const cities = globalFilters?.cities ?? [];
  // const stableCities = cities?.slice().sort();

  // const { data } = useQuery({
  //   queryKey: [
  //     "properties",
  //     globalFilters?.cities,
  //     globalFilters.properties,
  //     role,
  //   ], 
  //   queryFn: () =>
  //     getPropertiesData({
  //       params: buildCityPropertyParams(globalFilters),
  //     }),
  //   enabled: true,
  //   staleTime: 5 * 60 * 1000,
  //   cacheTime: 10 * 60 * 1000,
  //   placeholderData: (prev) => prev,
  // });
  // const hasProperty1114 = data?.data?.some((p) => Number(p.propertyId) == 1114);
  // const isSelectedProperty1114 =
  //   globalFilters?.properties?.length === 0 ||
  //   globalFilters?.properties?.some((id) => Number(id) === 1114);
  // const isEligibleUser = !isTenant && (isAdmin || isPropertyOwner);
  //   const { hasProperty1114, isSelectedProperty1114, isEligibleUser } =
  //     usePropertyAccess(draftGlobalFilters);

  //   const showOccupancyTab =
  //     isEligibleUser && hasProperty1114 && isSelectedProperty1114;
  const tabs = [
    { id: "viewall", label: "View All" },
    // showOccupancyTab && {
    //   id: "occupancy",
    //   label: "Occupancy & Business Insights",
    // },
    { id: "building", label: "Building Operation" },
    { id: "energy", label: "Energy Management" },
    { id: "user", label: "User/Property" },
  ].filter(Boolean);
  //   useEffect(() => {
  //     // if occupancy tab is hidden but currently active
  //     if (!showOccupancyTab && activeTab === "occupancy") {
  //       setActiveTab("building");
  //     }
  //   }, [showOccupancyTab, activeTab, setActiveTab]);
  return (
    <>
      <h2 className="fs-lg-26 fs-16 font-ibm-sans marb-20 marb-lg-35 text-edy-deepblue">
        Data Overview
      </h2>
      <div className=" d-flex align-items-end dashboard-tabs marb-10 marb-lg-25 border-bottom">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`dashboard-switch text-edy-deepblue ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
