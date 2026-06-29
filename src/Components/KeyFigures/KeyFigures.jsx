import totalPropertiesIcon from "../../assets/total_properties.svg";
import onlinePropertiesIcon from "../../assets/online_properties.svg";

// import DashboardFilterContext from "../../context/DashboardFilterContext";
import { useQuery } from "@tanstack/react-query";
// import { getPropertiesStatusCount } from "../../apis/PropertiesApis";
import { useDispatch } from "react-redux";
// import { setTotalProperties } from "../../app/slices/authSlice";
import { useEffect } from "react";

const KeyFigures = () => {
  const dispatch = useDispatch();
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["propertiescount"],
  //     queryFn: getPropertiesStatusCount,

  //     // enabled: true,
  //     staleTime: 2 * 60 * 1000,
  //     cacheTime: 5 * 60 * 1000,
  //     placeholderData: (prev) => prev,
  //   });
  //   const propertiesCount = data?.data || [];

  //   const totalProperties = Number(propertiesCount?.[0]?.totalProperties || 0);
  //   const onlineProperties = Number(propertiesCount?.[0]?.onlineProperties || 0);
  //   const hasData = propertiesCount?.length > 0;
  //   useEffect(() => {
  //     if (totalProperties > 0) {
  //       dispatch(setTotalProperties(totalProperties)); // ← use dispatch, not useDispatch
  //     }
  //   }, [totalProperties]);
  //   if (!propertiesCount) return null;

  return (
    <div className="keyfigues-component marb-25 marb-lg-70">
      <h2 className="fs-16 fs-lg-26 font-ibm-sans marb-10 marb-lg-18 text-edy-deepblue">
        Key Figures
      </h2>
      {/* <div className="d-flex align-items-center flex-wrap flex-row k-figs">
        <div className="d-flex statcard">
          <img src={totalPropertiesIcon} alt={` icon`} width="40" />
          <div className="content d-flex flex-column justify-content-between">
            <p className="mb-0 card-title text-edy-deepblue">
              Total Properties
            </p>
            {isLoading ? (
              <div>Loading...</div>
            ) : !hasData ? (
              <span>No Data Found</span>
            ) : (
              <span
                className={` text-edy-deepblue ${totalProperties !== null && totalProperties !== undefined ? "card-value" : "fs-12 fs-xl-16 fw-5"} `}
              >
                {totalProperties}
              </span>
            )}
          </div>
        </div>
        <div className="d-flex statcard">
          <img src={onlinePropertiesIcon} alt={` icon`} width="40" />
          <div className="content d-flex flex-column justify-content-between">
            <p className="mb-0 card-title text-edy-deepblue">
              Properties Online
            </p>
            {isLoading ? (
              <div>Loading...</div>
            ) : !hasData ? (
              <span>No Data Found</span>
            ) : (
              <span
                className={` text-edy-deepblue ${onlineProperties !== null && onlineProperties !== undefined ? "card-value" : "fs-12 fs-xl-16 fw-5"} `}
              >
                {onlineProperties}
              </span>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default KeyFigures;
