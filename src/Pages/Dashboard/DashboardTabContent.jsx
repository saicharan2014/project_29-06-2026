// import DashboardFilters from "../DashboardFilters/DashboardFilters";

// import DashboardAllView from "../../../pages/Dashboard/DashboardAllView";
// import DashboardTabContext from "../../../context/DashboardTabContext";
import { useContext, useState } from "react";
import DashboardFilters from "./DashboardFilters";
import DashboardViewAll from "./DashboardViewAll";

export default function DashboardTabContent() {
  //   const { activeTab } = useContext(DashboardTabContext);
  const [globalFilter, setGlobalFilter] = useState({
    states: [],
    propertyIds: [],
    quickSearch: "",
    customSearch: {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    },
  });

  return (
    <div className="dashboard-tab-content">
      <DashboardFilters setGlobalFilter={setGlobalFilter} />

      <DashboardViewAll globalFilter={globalFilter} />
    </div>
  );
}
