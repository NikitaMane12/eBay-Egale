const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ position: "fixed" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ marginRight: "20px" }}>
            <img
              src="https://convextech.com/wp-content/uploads/2024/06/logo.svg"
              style={{ width: "200px", height: "auto", marginLeft: "100px" }}
              alt="Logo"
            />
          </a>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{
              font: "15px",

              display: "flex",
              gap: "50px",
            }}
          >
            <ul
              className="navbar-nav"
              style={{
                font: "16px",
                marginLeft: "200px",
                display: "flex",
                gap: "25px",
              }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  WHY CHOOSE US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  SAP SOLUTION
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  SERVICE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ background: "white", fontWeight: "bold" }}
                    >
                      Health Care Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ background: "white", fontWeight: "bold" }}
                    >
                      IT Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ background: "white", fontWeight: "bold" }}
                    >
                      Non-IT And Engineering Services HOME PAGES
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <form className="d-flex" style={{ marginRight: "100px" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here"
              aria-label="Search"
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
