import React, { useState } from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "./context/globalContext";

const Header = () => {
  const { handleShowModal } = useGlobalContext();
  const [mMenu, setMMenu] = useState(false);

  return (
    <header className="micro-nav fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white micro-navbar housebrand-logo">
        <button
          className="navbar-toggler collapsed"
          onClick={() => setMMenu(!mMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          className="navbar-brand display-none-mobile"
          style={{ cursor: "pointer" }}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={50}
        >
          <img src="images/micl-logo.webp" className="logo" alt="Logo" />
        </Link>
        <Link
          className="navbar-brand housebazaar-logo-brand"
          style={{ cursor: "pointer" }}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={50}
        >
          <img src="images/micl-logo.webp" className="Logo" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-fill">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ cursor: "pointer" }}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
              >
                <i className="mi mi-home nav-icon"></i>

                <span className="d-sm-inline d-md-none"> Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"pricing"}
                style={{ cursor: "pointer" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-price nav-icon"></i> Price
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"floorplan"}
                style={{ cursor: "pointer" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-siteplan nav-icon"></i> Site &amp; Floor
                Plan
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"amenities"}
                spy={true}
                style={{ cursor: "pointer" }}
                smooth={true}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-ami nav-icon"></i> Amenities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"carousel"}
                spy={true}
                style={{ cursor: "pointer" }}
                smooth={true}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-gallery nav-icon"></i> Gallery
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to={"location"}
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-location nav-icon"></i> Location
              </Link>
            </li> */}

            <li className="nav-item overflow-hidden">
              <Link
                onClick={() => {
                  setMMenu(false);
                  handleShowModal();
                }}
                className="nav-link enqModal download_brochure"
                style={{ cursor: "pointer" }}
              >
                <i className="mi mi-download nav-icon d-inline-block animated slideInDown infinite"></i>{" "}
                Download Brochure
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"capitalacres"}
                style={{
                  cursor: "pointer",
                  padding: "0",
                  marginBlock: "0",
                }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <img
                  src="images/klogo.webp"
                  alt="K-NINE REALTORS LOGO"
                  className="logo navbar-brand display-none-mobile"
                  style={{ height: "2rem", marginBlock: ".5rem" }}
                />
              </Link>
            </li>
          </ul>
        </div>
        {mMenu && (
          <div className="navbar-collapse">
            <ul className="navbar-nav nav-fill">
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  to={"home"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                >
                  <i className="mi mi-home nav-icon"></i>

                  <span className="d-sm-inline d-md-none"> Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  to={"pricing"}
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className="nav-link"
                >
                  <i className="mi mi-price nav-icon"></i> Price
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  to={"floorplan"}
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className="nav-link"
                >
                  <i className="mi mi-siteplan nav-icon"></i> Site &amp; Floor
                  Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  to={"amenities"}
                  spy={true}
                  style={{ cursor: "pointer" }}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className="nav-link"
                >
                  <i className="mi mi-ami nav-icon"></i> Amenities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  to={"carousel"}
                  spy={true}
                  style={{ cursor: "pointer" }}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className="nav-link"
                >
                  <i className="mi mi-gallery nav-icon"></i> Gallery
                </Link>
              </li>

              {/* <li className="nav-item">
              <Link
                to={"location"}
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
                offset={-70}
                duration={50}
                className="nav-link"
              >
                <i className="mi mi-location nav-icon"></i> Location
              </Link>
            </li> */}

              <li className="nav-item overflow-hidden">
                <Link
                  onClick={() => handleShowModal()}
                  className="nav-link enqModal download_brochure"
                  style={{ cursor: "pointer" }}
                >
                  <i className="mi mi-download nav-icon d-inline-block animated slideInDown infinite"></i>{" "}
                  Download Brochure
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMMenu(false)}
                  to={"capitalacres"}
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  className="nav-link"
                >
                  <img
                    src="images/klogo.webp"
                    alt="K-NINE REALTORS LOGO"
                    className="logo navbar-brand display-none-mobile"
                    style={{ height: "40px" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
