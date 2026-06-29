import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers";
const TimeFrame = ({
  setDraftGlobalFilters,
  draftGlobalFilters,
  isCleared,
}) => {
  const [quickSearchValue, SetQucikSearchValue] = useState("");

  const [customSearch, setCustomSearch] = useState({
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
  });
  const quickSearchValues = [
    {
      label: "7 Days",
      value: "7days",
    },
    {
      label: "30 Days",
      value: "30days",
    },
    {
      label: "12 Months",
      value: "12months",
    },
  ];
  const handleChange = (e) => {
    if (e.target.checked) {
      const value = e.target.value;
      SetQucikSearchValue(value);
      setDraftGlobalFilters((prev) => ({
        ...prev,
        quickSearch: value,
      }));
    } else {
      SetQucikSearchValue("");
      setDraftGlobalFilters((prev) => ({
        ...prev,
        quickSearch: "",
      }));
    }
    setCustomSearch({
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
    });
    setDraftGlobalFilters((prev) => ({
      ...prev,
      customSearch: {
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
      },
    }));
  };
  const handleStartDate = (nextValue) => {
    SetQucikSearchValue("");
    setDraftGlobalFilters((prev) => ({
      ...prev,
      quickSearch: "",
    }));

    if (nextValue == null) {
      setCustomSearch((prev) => ({
        ...prev,
        startDate: null,
        endDate: null,
      }));
      setDraftGlobalFilters((prev) => ({
        ...prev,
        customSearch: {
          ...prev.customSearch,
          startDate: null,
          endDate: null,
        },
      }));

      return;
    }

    setCustomSearch((prev) => ({
      ...prev,
      startDate: dayjs(nextValue).format("YYYY-MM-DD"),
    }));
    setDraftGlobalFilters((prev) => ({
      ...prev,
      customSearch: {
        ...prev.customSearch,
        startDate: dayjs(nextValue).format("YYYY-MM-DD"),
      },
    }));
  };
  const handleEndDate = (nextValue) => {
    SetQucikSearchValue("");
    setDraftGlobalFilters((prev) => ({
      ...prev,
      quickSearch: "",
    }));
    if (nextValue == null) {
      setCustomSearch((prev) => ({
        ...prev,
        endDate: null,
      }));
      setDraftGlobalFilters((prev) => ({
        ...prev,
        customSearch: {
          ...prev.customSearch,

          endDate: null,
        },
      }));
      return;
    }

    setCustomSearch((prev) => ({
      ...prev,
      endDate: dayjs(nextValue).format("YYYY-MM-DD"),
    }));

    setDraftGlobalFilters((prev) => ({
      ...prev,
      customSearch: {
        ...prev.customSearch,

        endDate: dayjs(nextValue).format("YYYY-MM-DD"),
      },
    }));
  };

  const handleStartTime = (starttime) => {
    SetQucikSearchValue("");
    setDraftGlobalFilters((prev) => ({
      ...prev,
      quickSearch: "",
    }));
    if (starttime == null) {
      setCustomSearch((prev) => ({
        ...prev,
        startTime: null,
        endTime: null,
      }));
      setDraftGlobalFilters((prev) => ({
        ...prev,
        customSearch: {
          ...prev.customSearch,
          startTime: null,
          endTime: null,
        },
      }));
      return;
    }

    setCustomSearch((prev) => ({
      ...prev,
      startTime: dayjs(starttime).format("hh:mm"),
    }));
    setDraftGlobalFilters((prev) => ({
      ...prev,
      customSearch: {
        ...prev.customSearch,
        startTime: dayjs(starttime).format("hh:mm"),
      },
    }));
  };
  const handleEndTime = (endTime) => {
    SetQucikSearchValue("");
    setDraftGlobalFilters((prev) => ({
      ...prev,
      quickSearch: "",
    }));
    if (endTime == null) {
      setCustomSearch((prev) => ({
        ...prev,
        endTime: null,
      }));
      setDraftGlobalFilters((prev) => ({
        ...prev,
        customSearch: {
          ...prev.customSearch,

          endTime: null,
        },
      }));
      return;
    }

    setCustomSearch((prev) => ({
      ...prev,
      endTime: dayjs(endTime).format("hh:mm"),
    }));
    setDraftGlobalFilters((prev) => ({
      ...prev,
      customSearch: {
        ...prev.customSearch,

        endTime: dayjs(endTime).format("hh:mm"),
      },
    }));
  };

  useEffect(() => {
    SetQucikSearchValue("");
    setCustomSearch({
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
    });
  }, [isCleared]);

  //   console.log("hhhh", quickSearchValue);
  //   console.log(customSearch, "ssssss");
  //   // console.log(quickSearchValue.length);
  //   if (quickSearchValue) {
  //     setDraftGlobalFilters((prev) => ({
  //       ...prev,
  //       timeframe: {
  //         qucikSearch: quickSearchValue,
  //       },
  //     }));
  //     setCustomSearch({
  //       startDate: null,
  //       endDate: null,
  //       startTime: null,
  //       endTime: null,
  //     });
  //   }
  //   if (customSearch) {
  //     const start = `${customSearch.startDate} ${customSearch.startTime}`;
  //     const end = `${customSearch.endDate} ${customSearch.endTime}`;
  //     setDraftGlobalFilters((prev) => ({
  //       ...prev,
  //       timeframe: {
  //         qucikSearch: "",
  //         startDate: start,
  //         endDate: end,
  //       },
  //     }));
  //     SetQucikSearchValue("");
  //   }
  // }, [quickSearchValue, customSearch]);
  return (
    <div>
      <span>Quick Search</span>
      {quickSearchValues.map((obj, id) => (
        <div key={id}>
          <input
            type="checkbox"
            value={obj.value}
            onChange={handleChange}
            name={obj.value}
            id={obj.value}
            checked={quickSearchValue.includes(obj.value)}
          />
          <label htmlFor={obj.value}>{obj.label}</label>
        </div>
      ))}
      <hr></hr>
      <span>Custom Search</span>
      <DatePicker
        onChange={handleStartDate}
        value={customSearch.startDate ? dayjs(customSearch.startDate) : null}
        slotProps={{
          field: { clearable: true }, // Adds the "X" button inside the field
        }}
      />
      <span>to</span>
      <DatePicker
        onChange={handleEndDate}
        value={customSearch.endDate ? dayjs(customSearch.endDate) : null}
        minDate={dayjs(customSearch.startDate) || undefined}
        disabled={!customSearch.startDate}
        slotProps={{
          field: { clearable: true }, // Adds the "X" button inside the field
        }}
      />
      <TimePicker
        minutesStep={15}
        value={
          customSearch.startTime ? dayjs(customSearch.startTime, "HH:mm") : null
        }
        onChange={handleStartTime}
        ampm={false}
        slotProps={{
          field: { clearable: true },
        }}
      />
      <span>to</span>
      <TimePicker
        minutesStep={15}
        value={
          customSearch.endTime ? dayjs(customSearch.endTime, "HH:mm") : null
        }
        onChange={handleEndTime}
        minTime={
          customSearch.startTime &&
          customSearch.startDate === customSearch.endDate
            ? dayjs()
                .set("hour", parseInt(customSearch.startTime.split(":")[0]))
                .set("minute", parseInt(customSearch.startTime.split(":")[1]))
            : undefined
        }
        disabled={!customSearch.startTime}
        ampm={false}
        slotProps={{
          field: { clearable: true },
        }}
      />
    </div>
  );
};

export default TimeFrame;
