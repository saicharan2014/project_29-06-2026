import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthFormUI = ({
  title,
  inputs,
  buttontext,
  footerlink,
  loading,
  formik,
  setRememberme,
  loadingtext,
  privacyStatement,
  bottonlink,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState({});
  const togglePassword = (name) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  return (
    <AuthContainer title={title}>
      <form onSubmit={formik.handleSubmit}>
        {inputs.map((input, index) => {
          const isPassword = input.type === "password";
          return (
            <div key={index} className="position-relative">
              <div className="position-relative">
                <label
                  htmlFor={input.id}
                  className="text-edy-white input-lable font-ibm-sans fs-lg-26 fs-18 marb-12 lh-1-2"
                >
                  {input.label}
                </label>
                <input
                  type={
                    isPassword && showPassword[input.name] ? "text" : input.type
                  }
                  placeholder={input.placeholder}
                  value={formik.values[input.name] || input.value || ""}
                  onChange={formik.handleChange}
                  id={input.id}
                  name={input.name}
                  onBlur={formik.handleBlur}
                  disabled={loading || input.disabled}
                  className="border-0 border-focus-edy-blue pady-10 padx-20 w-100 rounded-2 input-field w-100 font-ibm-sans fs-20 mht-50"
                />
                {input.type === "password" && (
                  <span
                    className="position-absolute   translate-middle-y me-4 cursor-pointer text-edy-purple mt-4"
                    onClick={() => togglePassword(input.name)}
                    style={{ top: 43, right: "-10px" }}
                  >
                    {showPassword[input.name] ? <Eye /> : <EyeOff />}
                  </span>
                )}
              </div>
            </div>
          );
        })}
        {privacyStatement && (
          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="privacyStatement"
              name="privacyStatement"
              className="form-check-input"
              onChange={formik.handleChange}
              checked={formik.values.privacyStatement}
            />
            <label
              htmlFor="privacyStatement"
              className="form-check-label text-edy-white fs-14"
            >
              By checking this box, you agree to our Terms and have read and
              acknowledge the{" "}
              <a
                href="https://edyfi.com/privacy-statement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-underline"
              >
                Privacy Statement
              </a>
            </label>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          {footerlink && (
            <Link
              to={footerlink.to}
              className="link-underline link-underline-opacity-0 text-edy-blue fw-regular text-edy-white fs-14 font-ibm-sans"
            >
              {footerlink.text}
            </Link>
          )}

          {setRememberme && (
            <div className="form-check mb-0 d-flex gap-2 p-0 h-max-content align-items-center">
              <input
                className="form-check-input m-0 float-none "
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                onChange={(e) => {
                  setRememberme(e.target.checked);
                  setIsChecked(e.target.checked);
                }}
                checked={isChecked}
              />
              <label
                className="form-check-label text-edy-white fs-14 lh-1 font-ibm-sans"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
          )}
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-green w-max-content padx-20 padx-lg-30 pady-10 pady-lg-12 rounded-pill fw-semibold fs-lg-20 fs-16 ${loading ? "disabled" : ""}`}
          >
            {loading ? loadingtext : buttontext}
          </button>
          {bottonlink && (
            <Link
              to={bottonlink.to}
              className="link-underline link-underline-opacity-0 text-edy-blue fw-regular text-edy-white fs-14 font-ibm-sans"
            >
              {bottonlink.text}
            </Link>
          )}
        </div>
      </form>
    </AuthContainer>
  );
};

export default AuthFormUI;
