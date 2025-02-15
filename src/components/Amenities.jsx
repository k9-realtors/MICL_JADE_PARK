import React from "react";
import { useGlobalContext } from "./context/globalContext";

const Amenities = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="amenities">
      <span className="section-link"></span>{" "}
      <div className="row">
        <div className="col-md-8">
          <h2 className="head text-capitalize">MICL Jade Park - Amenities</h2>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale float-lg-right mx-sm-auto  d-none d-lg-block"
            onClick={handleShowModal}
          >
            Download Amenities
          </button>
        </div>
      </div>
      <div className="owl-carousel-fp owl-carousel owl-theme ticket-amenities">
        <div
          className="item"
          data-form="lg"
          data-title="Download Floor Plan"
          data-btn="Submit"
          data-enquiry="Floor Plan Footer tab mobile"
          data-redirect="enquiry"
          data-toggle="modal"
          data-target="#enqModal"
        >
          <img src="images/a1.webp" alt="aminities" />
        </div>
        <div
          className="item"
          data-form="lg"
          data-title="Download Floor Plan"
          data-btn="Submit"
          data-enquiry="Floor Plan Footer tab mobile"
          data-redirect="enquiry"
          data-toggle="modal"
          data-target="#enqModal"
        >
          <img src="images/a2.webp" alt="aminities" />
        </div>
        <div
          className="item"
          data-form="lg"
          data-title="Download Floor Plan"
          data-btn="Submit"
          data-enquiry="Floor Plan Footer tab mobile"
          data-redirect="enquiry"
          data-toggle="modal"
          data-target="#enqModal"
        >
          <img src="images/a3.webp" alt="aminities" />
        </div>
        <div
          className="item"
          data-form="lg"
          data-title="Download Floor Plan"
          data-btn="Submit"
          data-enquiry="Floor Plan Footer tab mobile"
          data-redirect="enquiry"
          data-toggle="modal"
          data-target="#enqModal"
        >
          <img src="images/a4.webp" alt="aminities" />
        </div>
      </div>
      <div className="col-12">
        <p></p>
        <button
          className="chat-btn btn btn-info micro-form-btn enqModal effetMoveGradient effectScale float-lg-right mx-sm-auto d-lg-none"
          data-form="lg"
          data-title="Download Amenities"
          data-btn="Send Now"
          data-enquiry="Download Amenities"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
          onClick={handleShowModal}
        >
          Download Amenities
        </button>
      </div>
    </section>
  );
};

export default Amenities;
