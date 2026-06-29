import React, { useState } from "react";
import DashboardFilters from "../../Pages/Dashboard/DashboardFilters";
import DashboardDownload from "../../Pages/Dashboard/DashboardDownload";
import DashboardFooter from "../../Pages/Dashboard/DashboardFooter";

const DashboardCard = ({
  title,
  filtertype,
  download,
  footerdata,
  children,
  id,
  queryKey,
  queryFn,
}) => {
  const [cardFilter, setCardFilter] = useState({});
  const handleCardfilter = (value) => {
    setCardFilter((prev) => ({
      ...prev,
      [id]: {
        ...value,
      },
    }));
  };

  console.log(cardFilter, "cardFilter");
  return (
    <div className="border border-2 border-danger">
      <h1>{title}</h1>
      <span>+</span>
      <span>-</span>
      {filtertype == "card" && (
        <DashboardFilters
          filtertype={filtertype}
          setGlobalFilter={handleCardfilter}
        />
      )}
      {download && <DashboardDownload />}
      {React.cloneElement(children, {
        cardFilter: Object.values(cardFilter).length > 0 ? cardFilter[id] : {},
      })}
      {footerdata && <DashboardFooter footerdata={footerdata} />}
    </div>
  );
};

export default DashboardCard;
