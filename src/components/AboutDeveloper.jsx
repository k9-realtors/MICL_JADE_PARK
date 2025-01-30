import React from "react";
import { useGlobalContext } from "./context/globalContext";
import "../index.css";

const AboutDeveloper = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="developer">
      {/* <div className="d-block pt-2 pb-1 text-center">
        <img
          src="images/micl-logo.webp"
          width="150px"
          height="70px"
          loading="lazy"
          alt="Logo"
        />
      </div> */}
      <div className="row">
        <div className="col-md-8">
          <h2 className="d-block section-heading-sub text-capitalize">
            About Developer
          </h2>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale download_brochure float-lg-right d-none d-lg-block"
            onClick={handleShowModal}
          >
            Chat with us
          </button>
        </div>
      </div>

      <p>
        With a rich history dating back to 1964, the <strong>MICL Group</strong>{" "}
        has established itself as a beacon of excellence in the industry,
        boasting an impressive legacy that spans over five decades. Our journey
        has been marked by a relentless pursuit of innovation, trust and
        comprehensive development, cementing our position as a leader in the
        field.
      </p>

      <p>
        Over the years, we have successfully undertaken and completed some of
        India’s most challenging and iconic projects, showcasing our expertise
        and capabilities. Our strategic diversification into various sectors,
        including port infrastructure, residential townships, commercial
        projects, institutional establishments like hospitals, industrial
        projects and futuristic lifestyle homes, has enabled us to stay ahead of
        the curve and meet the evolving needs of our clients.
      </p>

      <p>
        What sets us apart is our unwavering commitment to timely project
        completion, often ahead of schedule. This has earned us the trust,
        confidence and loyalty of our clients, who appreciate our dedication to
        excellence and ability to deliver on promises. At MICL Group, we take
        pride in our legacy and continue to push boundaries, striving for
        innovation and perfection in everything we do.
      </p>

      <div class="rera-numbers">
        <div class="rera-item">
          <img src="images/rera-P51800078679.webp" alt="rera qr" />
          <strong>P51800078679</strong>
        </div>
        <div class="rera-item">
          <img src="images/rera-P51800078808.webp" alt="rera qr" />
          <strong>P51800078808</strong>
        </div>
      </div>

      <span className="pro-rera text-center-mob">
        <strong>MICL Jade Park</strong> has been registered via MahaRERA
        registration number and is available on the website{" "}
        <a href="https://maharera.mahaonline.gov.in/">
          https://maharera.mahaonline.gov.in/
        </a>{" "}
        under registered projects.
      </span>

      <p></p>
      <button
        className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale download_brochure float-lg-right mx-sm-auto d-lg-none"
        data-form="lg"
        data-title=" Chat with us"
        data-btn=" Chat with us"
        data-enquiry="Download Brochure Left Panel"
        data-redirect="enquiry"
        data-toggle="modal"
        data-target="#enqModal"
      >
        Chat with us
      </button>
    </section>
  );
};

export default AboutDeveloper;
