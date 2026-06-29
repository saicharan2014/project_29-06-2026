import { useState } from "react";
import CommonTable from "../../Components/Common/CommonTable";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Users = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const theadings = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },

    {
      key: "email",
      label: "Email",
    },
    {
      key: "property",
      label: "Property",
    },
    {
      key: "role",
      label: "Role",
    },
  ];
  const tcontent = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      property: "Green Valley Apartments",
      role: "Admin",
    },
    {
      id: 2,
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
      property: "Sunrise Residency",
      role: "Property Owner",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      property: "Oakwood Heights",
      role: "Tenant",
    },
    {
      id: 4,
      name: "Sophia Davis",
      email: "sophia.davis@example.com",
      property: "Lakeview Towers",
      role: "Property Owner",
    },
    {
      id: 5,
      name: "William Wilson",
      email: "william.wilson@example.com",
      property: "Central Park Residences",
      role: "Tenant",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      property: "Green Valley Apartments",
      role: "Tenant",
    },
    {
      id: 7,
      name: "James Anderson",
      email: "james.anderson@example.com",
      property: "Sunrise Residency",
      role: "Admin",
    },
    {
      id: 8,
      name: "Ava Thomas",
      email: "ava.thomas@example.com",
      property: "Oakwood Heights",
      role: "Tenant",
    },
  ];

  return (
    <div>
      <BreadCrumbs />
      <button onClick={() => navigate(`/${location.pathname}/add`)}>
        New User
      </button>
      <input type="search" onChange={handleSearch} value={search} />
      <CommonTable theadings={theadings} tcontent={tcontent} />
    </div>
  );
};

export default Users;
