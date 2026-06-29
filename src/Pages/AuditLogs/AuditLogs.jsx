import { useEffect, useState } from "react";
import TimeFrame from "../Dashboard/TimeFrame";
import { getAuditlogs } from "../../apis/DashboardApis/auditLogApis";
import { useQuery } from "@tanstack/react-query";
import CommonTable from "../../Components/Common/CommonTable";
import Pagination from "../../Components/Pagination/Pagination";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
const AuditLogs = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const initialValues = {
    search: "",
    quickSearch: "",
    customSearch: {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    },
    role: "",
  };
  const [draftFilter, setDraftfilters] = useState(initialValues);
  const [globalFilter, setGloablFilter] = useState(initialValues);
  const [parmas, setParmas] = useState({
    page: 1,
    limit: 10,
  });
  const [isCleared, setIsCleared] = useState(false);
  const defaultState =
    JSON.stringify(initialValues) === JSON.stringify(draftFilter);
  const handleSearch = (e) => {
    console.log(e.target.value, "e.target.value");
    setDraftfilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };
  const roleOptions = [
    {
      label: "Admin",
      value: "Admin",
    },
    {
      label: "Property Owner",
      value: "PropertyOwner",
    },
    {
      label: "Tenant",
      value: "Tenant",
    },
  ];
  const handleOption = (e) => {
    setDraftfilters((prev) => ({
      ...prev,
      role: e.target.value,
    }));
  };

  const getParmas = (data) => {
    let parmas = {};

    if (data?.search) {
      parmas.search = data.search;
    }

    if (data?.quickSearch !== "" && data?.quickSearch !== null) {
      console.log("ddd");
      parmas.rangeType = data?.quickSearch;
    }

    if (data?.customSearch) {
      const hasData = Object.values(data?.customSearch).every(
        (item) => item != undefined && item != null && item != "",
      );

      console.log(Object.values(data.customSearch), "ddd");
      if (hasData) {
        parmas.rangeType = "custom";
        parmas.startDate = `${data.customSearch.startDate} ${data.customSearch.startTime}`;
        parmas.endDate = `${data.customSearch.endDate} ${data.customSearch.endTime}`;
      }
    }
    if (data?.role) {
      parmas.roleName = data.role;
    }
    if (page) {
      parmas.page = 1;
    }
    if (limit) {
      parmas.limit = 10;
    }
    return parmas;
  };
  const handleApply = () => {
    setGloablFilter(draftFilter);

    setParmas(getParmas(draftFilter));
  };
  const handleClear = () => {
    setDraftfilters(initialValues);
    setGloablFilter(initialValues);
    setIsCleared(true);
  };
  useEffect(() => {
    if (defaultState) {
      setIsCleared(false);
    }
  }, [defaultState]);
  const { data, isPending } = useQuery({
    queryKey: ["auditlogs", parmas, page],
    queryFn: () => getAuditlogs(parmas),
  });

  const mapData = data?.data;

  // // const nodata = mapData?.map((item) =>
  // //   Object.values(item).every((item) => item != null || item != undefined),
  // // );
  // // nodata.includes(false) && <div>...NO DATA</div>;

  // const exculdekeys = ["id", "userId"];

  // const keys = Object.keys(mapData[0]);

  // // console.log(keys, "hhhh");
  // const filteredKeys = keys?.filter((item) => !exculdekeys.includes(item));
  // // console.log(filteredKeys, "filteredKeys");
  // const theadings = filteredKeys.map((item) => {
  //   return {
  //     label: item.toUpperCase(),
  //     key: item,
  //   };
  // });
  // console.log(theadings, "ddgg");

  const theadings = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Role",
      key: "roleName",
    },
    {
      label: "EMAIL",
      key: "email",
    },

    {
      label: "CATEGORY",
      key: "category",
    },
    {
      label: "CREATED AT",
      key: "createdAt",
    },
  ];
  // useEffect(() => {
  //   setParmas({
  //     page: 1,
  //     limit: 10,
  //   });
  // }, []);
  // console.log("ggg", data.totalPages);
  if (isPending) return <div>....loading</div>;
  // console.log(page, "gggg");
  return (
    <>
      <div>
        <BreadCrumbs />
        <div className="audit-search">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            onChange={handleSearch}
            value={draftFilter.search}
            id="search"
          />
          <label>TimeFrame</label>
          <TimeFrame
            setDraftGlobalFilters={setDraftfilters}
            isCleared={isCleared}
          />
          <label>Role</label>
          <select onChange={handleOption} value={draftFilter.role}>
            {roleOptions.map((obj, id) => (
              <option value={obj.value} key={id}>
                {obj.label}
              </option>
            ))}
          </select>
          <button onClick={handleApply} disabled={defaultState}>
            Apply
          </button>
          <button onClick={handleClear} disabled={defaultState}>
            Clear
          </button>
        </div>
        <CommonTable theadings={theadings} tcontent={mapData} actions={false} />
      </div>
      <Pagination
        totalpages={data.totalPages}
        page={page}
        setPage={setPage}
        setParmas={setParmas}
      />
    </>
  );
};

export default AuditLogs;
