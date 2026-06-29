import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profileLogo.svg";
import { logout } from "../../app/slices/authSlice";
// import { useQueryClient } from "@tanstack/react-query";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";
const ProfileModal = ({ onClose }) => {
  const dispatch = useDispatch();
  // const queryClient = useQueryClient();
  const email = useSelector((state) => state.auth.user?.email);
  const name = useSelector((state) => state.auth.user?.name);
  const modalRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    // queryClient.clear();
    onClose();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !event.target.closest("#profile-toggle-btn")
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="position-fixed bg-white border-r-6  shadow minwd-250 right-25 top-70"
      style={{ zIndex: 9999 }}
    >
      {/* User Info Section */}
      <div className="d-flex align-items-center gap-3 pad-20 flex-column">
        <div className="d-flex flex-row w-100">
          <img
            className="wd-40 ht-40 rounded-circle border-success-subtle marr-17"
            src={profileImage}
            alt="profile"
            loading="lazy"
            decoding="async"
          />
          <div className="d-flex flex-column overflow-hidden">
            <span className="fw-6 text-edy-bluegrey text-truncate fs-14 fs-lg-16 lh-1-6">
              {name}
            </span>
            <span className="fw-4 text-edy-bluegrey text-truncate fs-12 l-1">
              {email}
            </span>
            <Link
              to="/dashboard/update-password"
              className="fw-4 text-edy-bluegrey text-truncate fs-12 l-1 text-decoration-none mart-10"
            >
              Update Password
            </Link>
            <Link
              to="/dashboard/update-profile"
              className="fw-4 text-edy-bluegrey text-truncate fs-12 l-1 text-decoration-none mart-10"
            >
              Update Profile
            </Link>
            <button
              type="button"
              className="btn btn-link text-decoration text-edy-bluegrey w-100 fs-12 l-1 fw-4 text-start p-0 mart-20 mart-lg-30... link-primary"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
