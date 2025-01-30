import React from "react";
import { useGlobalContext } from "./context/globalContext";

const Footer = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <>
      <section className="section shadow-sm lazyloaded" id="developer">
        <small>
          <b>Disclaimer:</b>
          This website is managed by an authorized marketing partner registered
          under RERA. The information provided is for general reference only and
          does not constitute an official offer. Prices, layouts, and
          availability are subject to change. All images used are for
          representation purposes only. The website may share collected data
          with RERA-registered brokers and partners for further processing.
          <div className="footer-copyright">
            <span>
              {" "}
              Contact Us at: MBC Center, Kapurbawdi Junction Thane (W) 400607{" "}
            </span>
            <span> © Copyright 2024</span>
            <span style={{ marginBottom: "50px" }}>
              <a href="about.html" target="_blank" rel="noopener noreferrer">
                About Us
              </a>{" "}
              |{" "}
              <a
                href="termsandconditions.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </a>{" "}
              |{" "}
              <a href="privacy.html" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="cookies.html" target="_blank" rel="noopener noreferrer">
                Cookies Policy
              </a>{" "}
            </span>
          </div>
        </small>
      </section>
      <ul className="mob-action nav nav-fill d-lg-none">
        <li
          className="nav-item enqModal"
          onClick={handleShowModal}
          style={{ cursor: "pointer", color: "#fff" }}
        >
          <i className="mi mi-download nav-icon d-inline-block animated slideInDown infinite"></i>{" "}
          Enquire
        </li>
        <a
          className="nav-item enqModal"
          href="https://api.whatsapp.com/send?phone=917506090422&text=Hi,%20I%20Would%20Like%20To%20Know%20More%20About MICL%20Jade%20Park Project.%20Please%20Share%20More%20Details!"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <span className="action-icon">
            <img src="images/wh.webp" alt="logo" />
          </span>{" "}
          Whatsapp{" "}
        </a>

        <li className="nav-item">
          <a
            href="tel:+917506090422"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {" "}
            <span className="mi mi-call action-icon"></span> Call Now
          </a>
        </li>
      </ul>
    </>
  );
};

export default Footer;
