import React from "react";
import getCardParmas from "./getCardParmas";
import getGlobalParmas from "./getGlobalParmas";

const getEffectiveFilterParmas = (globalFilter, cardFilter) => {
  const hasCardFilterValues = Object.values(cardFilter)?.some((v) => {
    if (Array.isArray(v)) {
      return v.length > 0;
    }
    if (typeof v === "object") {
      return Object.values(v).some(
        (value) => value !== undefined && value !== null && value !== "",
      );
    }
    return v !== undefined && v !== null && v !== "";
  });

  if (hasCardFilterValues) {
    return getCardParmas(cardFilter);
  }

  const hasGlobalFilterValues = Object.values(globalFilter)?.some((v) => {
    if (Array.isArray(v)) {
      return v.length > 0;
    }
    if (typeof v === "object") {
      return Object.values(v).some(
        (value) => value !== undefined && value !== null && value !== "",
      );
    }
    return v !== undefined && v !== null && v !== "";
  });

  if (hasGlobalFilterValues) {
    return getGlobalParmas(globalFilter);
  }
  return {};
};

export default getEffectiveFilterParmas;
