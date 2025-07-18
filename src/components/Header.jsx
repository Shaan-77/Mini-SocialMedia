import "../App.css";

const Header = ({ SelectedTab, setSelectedTab }) => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center  mb-md-0">
              <li onClick={() => setSelectedTab("home")}>
                <a
                  href="#"
                  className={`nav-link px-2 text-white  ${
                    SelectedTab === "home" && "active"
                  }`}
                  aria-current="page"
                >
                  <svg className="bi pe-none me-2" width="26" height="26">
                    <use xlinkHref="#home"></use>
                  </svg>
                  Home
                </a>
              </li>
              <li onClick={() => setSelectedTab("Create Posts")}>
                <a
                  href="#"
                  className={`nav-link px-2 text-white  ${
                    SelectedTab === "Create Posts" && "active"
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#speedometer2"></use>
                  </svg>
                  Create Posts
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
