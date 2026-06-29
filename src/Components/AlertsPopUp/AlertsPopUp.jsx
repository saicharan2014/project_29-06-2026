import { useEffect, useMemo, useRef, useState } from "react";
import BellIcon from "../../assets/bell.svg";

import { useNavigate } from "react-router-dom";
// import { PriorityDot } from "../common/PriorityDot";

const AlertPopUp = ({ isLoading, data }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const groupedAlerts = useMemo(() => {
    if (!data?.data) return [];

    const map = {
      CRITICAL: [],
      MEDIUM: [],
      LOW: [],
    };
    const limits = {
      CRITICAL: 3,
      MEDIUM: 2,
      LOW: 1,
    };

    data.data.forEach((item, index) => {
      const priority = item.priority;
      if (map[priority] && map[priority].length >= limits[priority]) {
        return;
      }

      if (map[priority]) {
        map[priority].push({
          id: index,
          message: item.message,
        });
      }
    });

    return [
      {
        key: "critical",
        label: "Critical",
        badgeColor: "var(--edy-DRedThird)",
        dividerColor: "var(--edy-DRedThird)",
        items: map.CRITICAL,
      },
      {
        key: "medium",
        label: "Medium",
        badgeColor: "var(--edy-orgOrange)",
        dividerColor: "var(--edy-orgOrange)",
        items: map.MEDIUM,
      },
      {
        key: "low",
        label: "Low",
        badgeColor: "var(--edy-orgGreen)",
        dividerColor: "var(--edy-orgGreen)",
        items: map.LOW,
      },
    ].filter((section) => section.items.length > 0);
  }, [data]);
  const indicatorDots = groupedAlerts.map((section) => section.badgeColor);
  const alertRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="position-relative d-inline-block" ref={alertRef}>
      {/*  Trigger Button  */}
      <button
        onClick={() => setOpen((p) => !p)}
        className={`d-flex align-items-center gap-2 font-ibm-sans position-relative text-edy-bluegrey padx-15 padx-lg-20 pady-2 pady-lg-5 fs-20 fs-lg-26 border-r-10 border-r-lg-14 ${open ? "bg-edy-lightskyblue border-edy-transparent border-0" : "bg-edy-transparent border-edy-bluegrey border-1"}`}
      >
        {/* 3 indicator dots — top-left corner of button */}
        {!open && (
          <div
            className="position-absolute d-flex align-items-center z-2 left-20"
            style={{ top: -5 }}
          >
            {indicatorDots.map((color, i) => (
              <span
                key={i}
                className="wd-10 ht-10 rounded d-inline-block"
                style={{
                  backgroundColor: color,
                  marginRight: "-17px",
                  border: "1px solid var(--edy-white)",
                }}
              />
            ))}
          </div>
        )}
        <img
          src={BellIcon}
          alt="Bell Icon"
          className="wd-12 ht-12 wd-lg-16 ht-lg-16"
        />
        <span className="font-ibm-sans mb-0 text-edy-bluegrey fs-14 fs-lg-16">
          Alerts
        </span>
      </button>

      {/* ── Modal Panel ── */}
      {open && (
        <div
          className="position-absolute bg-white wd-300 wd-lg-370 border-r-16 shadow z-9999 padx-16 padx-lg-20 pady-lg-20 pady-16 border-edy-grey right-0 "
          style={{
            top: "calc(100% + 10px)",
            right: 0,
          }}
        >
          {groupedAlerts.map((section, idx) => (
            <div
              key={section.key}
              className={idx < groupedAlerts.length - 1 ? "mb-3" : ""}
            >
              {/* Section Title Row */}
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="font-ibm-sans fw-4 fs-14 fs-lg-20">
                  {section.label}
                </span>
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-6 fs-10 fs-lg-12 wd-18 wd-lg-24 ht-18 ht-lg-24 "
                  style={{
                    backgroundColor: section.badgeColor,
                  }}
                >
                  {section.items.length}
                </span>
              </div>

              {/* Alert Rows */}
              <div className="d-flex flex-column gap-2 mb-2">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center gap-2 rounded-2 bg-edy-lavender padx-10 pady-5 cursor-pointer"
                    onClick={() => {
                      navigate("/dashboard/alerts");
                      setOpen(false);
                    }}
                  >
                    {/* <PriorityDot priority={section.key} /> */}

                    <span className="font-ibm-sans fs-10 fs-lg-12 text-edy-deepblue line-clamp-2">
                      {item.message}
                    </span>
                  </div>
                ))}
              </div>

              {/* Colored Divider */}
              <div
                style={{
                  backgroundColor: section.dividerColor,
                }}
                className="ht-2 border-r-2 mart-15 marb-20"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertPopUp;
