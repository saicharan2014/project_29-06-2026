import React from "react";

const Pagination = ({ page, totalPages, setPage, setParmas }) => {

  const noOfButtons = Array(totalPages).fill("");

  const handleClick = (id) => {
    setPage(id + 1);
    setParmas((prev) => ({
      ...prev,
      page: id + 1,
    }));
  };

  const handlePrev = () => {
    setPage(page - 1);
    setParmas((prev) => ({
      ...prev,
      page: page - 1,
    }));
  };
  const handleNext = () => {
    setPage(page + 1);
    setParmas((prev) => ({
      ...prev,
      page: page + 1,
    }));
  };
  return (
    <div>
      <span>
        page {page} of {totalPages}
      </span>

      <button onClick={handlePrev} disabled={page == 1}>
        prev
      </button>
      {noOfButtons.map((_, id) => (
        <div key={id}>
          <button onClick={() => handleClick(id)}>{id + 1}</button>
        </div>
      ))}
      <button onClick={handleNext} disabled={page == totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
