export default function AuthContainer({ title, children }) {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 mwd-500 mx-auto">
      <div className="d-flex flex-column w-100 form-container padx-20 padx-lg-0">
        <div className="mb-2 mb-lg-4">
          <h2 className="text-edy-white fw-bold fs-20 fs-lg-30 fs-lg-80 mb-0">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
