import { useEffect, useState } from "react";
import DashboardFilters from "../Dashboard/DashboardFilters";
import { useQuery } from "@tanstack/react-query";

import { getAlerts } from "../../apis/DashboardApis/alertApis";
import CommonTable from "../../Components/Common/CommonTable";
import Pagination from "../../Components/Pagination/Pagination";
import getGlobalParmas from "../../utils/getGlobalParmas";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Alerts = () => {
  const [globalFilter, setGloablFilter] = useState({
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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [parmas, setParmas] = useState({
    page: 1,
    limit: 10,
  });
  const { data, isPending } = useQuery({
    queryKey: ["alerts", globalFilter, page],
    queryFn: () => getAlerts(parmas),
  });

  const alertData = data?.data;
  const theadings = [
    {
      label: "Property Name",
      key: "propertyName",
    },
    {
      label: "State",
      key: "state",
    },
    {
      label: "Priority",
      key: "priority",
    },
    {
      label: "Time",
      key: "createdAt",
    },
    {
      label: "Problem",
      key: "message",
    },
  ];
  const handleFilter = (values) => {
    setGloablFilter(values);
    setParmas(getGlobalParmas(values, page, limit));
  };

  if (isPending) return <div>...loading</div>;
  return (
    <div>
      <BreadCrumbs />
      <DashboardFilters setGlobalFilter={handleFilter} filtertype="alert" />
      <CommonTable theadings={theadings} tcontent={alertData} />
      <Pagination
        page={page}
        totalPages={data?.totalPages}
        setPage={setPage}
        setParmas={setParmas}
      />
    </div>
  );
};

export default Alerts;
