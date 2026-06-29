import React from "react";

function PriorityFilter({ name, setDraftGlobalFilters, draftGlobalFilters }) {
  const Options = [
    {
      label: "CRITICAL",
      value: "critical",
    },
    {
      label: "MEDIUM",
      value: "medium",
    },
    {
      label: "LOW",
      value: "low",
    },
  ];
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      setDraftGlobalFilters((pre) => ({
        ...pre,
        [name]: [...pre[name], value],
      }));
    } else {
      setDraftGlobalFilters((pre) => ({
        ...pre,
        [name]: [...pre[name]].filter((v) => v != value),
      }));
    }
  };
  return (
    <div>
      {Options.map((obj) => (
        <>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={
              draftGlobalFilters
                ? draftGlobalFilters[name]?.includes(obj.value)
                : null
            }
            id={obj.value}
            value={obj.value}
          />
          <label htmlFor={obj.value}>{obj.label}</label>
        </>
      ))}
    </div>
  );
}

export default PriorityFilter;
