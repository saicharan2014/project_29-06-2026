import React, { Children, useState } from "react";
import DashboardCard from "../../Components/Dashboard/DashboardCard";
import { Download } from "lucide-react";

import { getEnergyGraphApi } from "../../apis/DashboardApis/ChartApis";
import getGlobalParmas from "../../utils/getGlobalParmas";
import { useQuery } from "@tanstack/react-query";
import { isPending } from "@reduxjs/toolkit";
import ElectricityDistribution from "../Charts/ElectricityDistribution";
const DashboardViewAll = ({ globalFilter }) => {
  const DashboardCardData = [
    {
      id: "ElectricityDistribution",
      title: "Electricity Consumption Distribution",
      zoom: true,
      filtertype: "card",
      download: true,
      Children: ElectricityDistribution,
      footerdata: {
        category: "Energy Management",
        status: "Okay",
        lastupdated: "15 minutes ago",
      },
    },
    // {
    //   id: "Totalelectricity",
    //   title: "Total Electricity Consumption",
    //   zoom: true,
    //   filtertype: "card",
    //   download: true,
    //   footerdata: {
    //     category: "Energy Management",
    //     status: "Okay",
    //     lastupdated: "15 minutes ago",
    //   },
    // },
    // {
    //   id: "EmissionAdjusted",
    //   title: "Emission & Adjusted From PV Consumption [tCO₂-eq]",
    //   zoom: true,
    //   filtertype: "card",
    //   download: true,
    //   footerdata: {
    //     category: "Building Operation",
    //     status: "Okay",
    //     lastupdated: "15 minutes ago",
    //   },
    // },
    // {
    //   id: "TotalVisited",
    //   title: "Total Number of Visited Customers",
    //   zoom: true,
    //   filtertype: "card",
    //   download: true,
    //   footerdata: {
    //     category: "Occupancy & Business Insights",
    //     status: "Okay",
    //     lastupdated: "15 minutes ago",
    //   },
    // },
  ];
  return (
    <div>
      {DashboardCardData.map((item, id) => {
        const Component = item.Children;

        return (
          <div key={id}>
            <DashboardCard
              title={item.title}
              zoom={item.zoom}
              filtertype={item.filtertype}
              download={item.download}
              footerdata={item.footerdata}
              id={item.id}
            >
              <Component globalFilter={globalFilter} />
            </DashboardCard>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardViewAll;
