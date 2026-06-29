import React, { useEffect, useState } from "react";

const SearchableMultiSelect = ({
  options,
  setDraftGlobalFilters,
  title,
  name,
  isCleared,
}) => {
  const [checked, setChecked] = useState([]);
  const [search, setSearch] = useState("");

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setChecked((pre) => [...pre, e.target.value]);
      setDraftGlobalFilters((prev) => ({
        ...prev,
        [name]: [...checked, e.target.value],
      }));
    } else {
      const updated = checked.filter(
        (value) => value.toLowerCase() != e.target.value.toLowerCase(),
      );
      setChecked([...updated]);
      setDraftGlobalFilters((prev) => ({
        ...prev,
        [name]: [...updated],
      }));
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtertedOptions = options?.filter((obj) =>
    obj.value.toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    setChecked([]);
  }, [isCleared]);

  return (
    <div>
      <span>{title}</span>
      <input type="Search" onChange={handleSearch} value={search} />
      <br />
      {filtertedOptions?.length > 0 ? (
        filtertedOptions.map((obj, id) => (
          <div key={id}>
            <input
              type="checkbox"
              value={obj.value}
              name={obj.label}
              onChange={handleCheckBox}
              checked={checked.includes(obj.value)}
            />
            <label htmlFor={obj.value}>{obj.label}</label>
          </div>
        ))
      ) : (
        <span>No Data Found</span>
      )}
    </div>
  );
};

export default SearchableMultiSelect;
