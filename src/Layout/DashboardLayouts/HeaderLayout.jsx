import logo from "../../assets/edyfi_logo_w.svg";
import profileImage from "../../assets/../assets/profileLogo.svg";

import { useState } from "react";
import ProfileModal from "../../Components/Common/ProfileModal";

export default function HeaderLayout({ onMenuClick }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="header bg-edy-blue pady-18 padx-25 d-flex align-items-center justify-content-between position-fixed w-100 z-999">
      <div className="logo col-6 d-flex align-items-center gap-3">
        <img
          src={logo}
          alt="Edyfi Logo"
          width={"90px"}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="col-6 d-flex justify-content-end align-items-center gap-3 ">
        {/* <nav className="menu d-flex gap-4"> */}
        {/* <a
            href="#"
            className="menu-item text-white nounderline hover-text-edy-lime p-2"
          >
            Resources
          </a> */}
        {/* <a
            href="#"
            className="menu-item text-white nounderline hover-text-edy-lime p-2"
          >
            Documents
          </a>
        </nav>
        {/* <UserRound size={30} color="white" className="cursor-pointer" /> */}

        <div className="postion-relative">
          <img
            src={profileImage}
            alt="profile image"
            id="profile-toggle-btn"
            width={"34px"}
            loading="lazy"
            decoding="async"
            onClick={() => setModal((v) => !v)}
            style={{ cursor: "pointer" }}
          />
          {modal && (
            <ProfileModal setModal={setModal} onClose={() => setModal(false)} />
          )}
        </div>
        <button
          className="d-flex d-lg-none align-items-center justify-content-center border-0 bg-transparent p-0 me-1 "
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          style={{ cursor: "pointer" }}
        >
          <div className="header-hamburger-icon">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
    </div>
  );
}
