import { createContext, useState } from "react";

const DashboardTabContext = createContext();

export const DashboardTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("viewall");

  return (
    <DashboardTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </DashboardTabContext.Provider>
  );
};
export default DashboardTabContext;
