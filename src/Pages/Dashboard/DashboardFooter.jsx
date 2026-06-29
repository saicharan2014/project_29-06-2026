import React from "react";

const DashboardFooter = ({ footerdata }) => {
  return (
    <div>
      <span>Category :</span>
      <span>{footerdata.category}</span>
      <span>Data Status :</span>
      <span>{footerdata.status}</span>
      <span>Last updated :</span>
      <span>{footerdata.lastupdated}</span>
    </div>
  );
};

export default DashboardFooter;
