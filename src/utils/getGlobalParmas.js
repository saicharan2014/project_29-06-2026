const getGlobalParmas = (globalFilter, page, limit) => {
  let parmas = {};
  if (globalFilter?.states.length > 0) {
    parmas.states = globalFilter.states;
  }
  if (globalFilter?.propertyIds.length > 0) {
    parmas.propertyIds = globalFilter.propertyIds;
  }
  if (globalFilter?.priority > 0) {
    parmas.priority = globalFilter.priority;
  }
  if (globalFilter?.quickSearch !== "" && globalFilter?.quickSearch !== null) {
    parmas.rangeType = globalFilter?.quickSearch;
  }

  if (globalFilter?.customSearch) {
    const hasData = Object.values(globalFilter?.customSearch).every(
      (item) => item != undefined && item != null && item != "",
    );

    if (hasData) {
      parmas.rangeType = "custom";
      parmas.startDate = `${globalFilter.customSearch.startDate} ${globalFilter.customSearch.startTime}`;
      parmas.endDate = `${globalFilter.customSearch.endDate} ${globalFilter.customSearch.endTime}`;
    }
  }

  if (page) {
    parmas.page = 1;
  }
  if (limit) {
    parmas.limit = 10;
  }
  return parmas;
};

export default getGlobalParmas;
