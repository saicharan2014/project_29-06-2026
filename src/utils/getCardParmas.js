const getCardParmas = (cardfilters) => {
  let parmas = {};
  if (cardfilters.compareproperties.length > 0) {
    parmas.compareproperties = cardfilters.compareproperties;
  }
  if (cardfilters.propertyIds.length > 0) {
    parmas.propertyIds = cardfilters.propertyIds;
  }
  if (cardfilters.tenant.length > 0) {
    parmas.tenant = cardfilters.tenant;
  }
  if (cardfilters?.quickSearch !== "" && cardfilters?.quickSearch !== null) {
    parmas.rangeType = cardfilters?.quickSearch;
  }
  if (cardfilters?.customSearch) {
    const hasData = Object.values(cardfilters?.customSearch).every(
      (item) => item != undefined && item != null && item != "",
    );

    if (hasData) {
      parmas.rangeType = "custom";
      parmas.startDate = `${cardfilters.customSearch.startDate} ${cardfilters.customSearch.startTime}`;
      parmas.endDate = `${cardfilters.customSearch.endDate} ${cardfilters.customSearch.endTime}`;
    }
  }

  return parmas;
};

export default getCardParmas;
