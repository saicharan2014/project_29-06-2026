import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

import TimeFrame from "./TimeFrame";

import { use } from "echarts";
import SearchableMultiSelect from "../../Components/Common/SearchableMultiSelect.jsx";
import PriorityFilter from "../../Components/Common/PriorityFilter.jsx";

const DashboardFilters = ({ setGlobalFilter, filtertype }) => {
  const initialValues = {
    ...(filtertype !== "card" && { states: [] }),
    ...(filtertype == "card" && { compareproperties: [] }),
    propertyIds: [],
    quickSearch: "",
    customSearch: {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    },
    ...(filtertype == "card" && { tenant: [] }),
    ...(filtertype == "alert" && { priority: [] }),
  };
  const [draftGlobalFilters, setDraftGlobalFilters] = useState(initialValues);
  const [isCleared, setIsCleared] = useState(false);
  const stateOptions = [
    { value: "berlin", label: "Berlin" },
    { value: "brandenburg", label: "Brandenburg" },
    { value: "niedersachsen", label: "Niedersachsen" },
    { value: "rheinland", label: "Rheinland-Pfalz" },
    { value: "sachsen", label: "Sachsen" },
  ];
  const propertyOptions = [
    {
      label: "Berlin - Mahlsdorfer Märkte",
      value: "p_101",
    },
    {
      label: "Cloppenburg, Max-Planck-Straße 14",
      value: "p_102",
    },
    {
      label: "Freyburg, Kirschweg 3",
      value: "p_103",
    },
    {
      label: "Hohen Neuendorf",
      value: "p_104",
    },
    {
      label: "Höhr-Grenzhausen",
      value: "p_105",
    },
  ];
  const handleApply = () => {
    setGlobalFilter(draftGlobalFilters);
  };
  const handleClear = () => {
    setDraftGlobalFilters(initialValues);
    setGlobalFilter(initialValues);
    setIsCleared(true);
  };
  const defaultState =
    JSON.stringify(initialValues) === JSON.stringify(draftGlobalFilters);
  const enableApply = defaultState;

  const enableClear = defaultState;
  useEffect(() => {
    if (defaultState) {
      setIsCleared(false);
    }
  }, [defaultState]);

  return (
    <div>
      {filtertype !== "card" && (
        <SearchableMultiSelect
          title="State"
          options={stateOptions}
          setDraftGlobalFilters={setDraftGlobalFilters}
          name="states"
          isCleared={isCleared}
        />
      )}
      {filtertype == "card" && (
        <SearchableMultiSelect
          title="Compare Properties"
          options={propertyOptions}
          name="compareproperties"
          setDraftGlobalFilters={setDraftGlobalFilters}
          isCleared={isCleared}
        />
      )}
      <SearchableMultiSelect
        title="Property"
        options={propertyOptions}
        name="propertyIds"
        setDraftGlobalFilters={setDraftGlobalFilters}
        isCleared={isCleared}
      />
      {filtertype == "card" && (
        <SearchableMultiSelect
          title="Tenant"
          options={propertyOptions}
          name="tenant"
          setDraftGlobalFilters={setDraftGlobalFilters}
          isCleared={isCleared}
        />
      )}
      {filtertype == "alert" && (
        <PriorityFilter
          setDraftGlobalFilters={setDraftGlobalFilters}
          name="priority"
          draftGlobalFilters={draftGlobalFilters}
        />
      )}
      <TimeFrame
        setDraftGlobalFilters={setDraftGlobalFilters}
        isCleared={isCleared}
      />
      <button onClick={handleApply} disabled={enableApply}>
        Apply
      </button>
      <button onClick={handleClear} disabled={enableClear}>
        Clear
      </button>
    </div>
  );
};

export default DashboardFilters;
