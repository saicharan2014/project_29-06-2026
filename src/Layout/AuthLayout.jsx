import { Outlet } from "react-router-dom";
import logo from "../assets/graph-main.svg";

export default function AuthLayout() {
  return (
    <div
      className="d-flex align-items-stretch  bg-edy-darkblue "
      style={{ minHeight: "100vh" }}
    >
      {/* Left side container for the logo */}
      <div className="col-12 col-lg-6 default bg-edy-blue d-none d-lg-flex justify-content-center align-items-center rounded-4">
        <img src={logo} alt="Logo" className="img-fluid login-graphic" />
      </div>

      {/* Right side container for the form */}
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center h-100 align-self-center">
        <Outlet />
      </div>
    </div>
  );
}
