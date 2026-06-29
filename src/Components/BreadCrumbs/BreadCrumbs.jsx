import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const BreadCrumbs = () => {
  const loaction = useLocation();
  const breadCrumbsConfig = [
    {
      label: "Home",
      path: "/dashboard",
    },
    {
      label: (parmas) => {
        console.log(parmas, "00000");
        return parmas.module
          .split("-")
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(",");
      },
      path: "/dashboard/:module",
    },
    {
      label: "New Profile",
      path: "/dashboard/:module/add",
    },
    {
      label: "User Profile",
      path: "/dashboard/:module/edit/:id",
    },
  ];

  const crumbs = breadCrumbsConfig
    .map((obj) => {
      const match = matchPath(
        { path: obj.path, end: false },
        loaction.pathname,
      );
      console.log(match, "dddew");
      console.log(location.pathname);
      if (!match) return;
      return {
        ...obj,
        parmas: match.params,
      };
    })
    .filter(Boolean);

  console.log(crumbs, "ffff");
  return (
    <div>
      {crumbs.map((obj, id) => {
        console.log(obj.label, "e3wq");
        const lastCrumb = id === crumbs.length - 1;

        const updatelabel =
          typeof obj.label === "function" ? obj.label(obj.parmas) : obj.label;
        const path = obj.path.replace(
          /:([a-zA-Z]+)/g,
          (_, key) => obj.parmas[key],
        );
        console.log(updatelabel, "ddfe");
        return (
          <div key={id}>
            {lastCrumb ? (
              <span>{updatelabel}</span>
            ) : (
              <div>
                <Link to={path}>{updatelabel}</Link>
              </div>
            )}
            {!lastCrumb && <ChevronRight />}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
